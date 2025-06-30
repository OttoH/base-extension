import { ExtractedData, ContentType } from '../types';

export class ContentExtractor {
  private static readonly PET_KEYWORDS = [
    'dog', 'cat', 'pet', 'animal', 'veterinary', 'vet', 'puppy', 'kitten',
    'breed', 'health', 'nutrition', 'grooming', 'training', 'behavior',
    'vaccine', 'vaccination', 'medical', 'clinic', 'hospital', 'care', 
    'wellness', 'surgery', 'treatment', 'medicine', 'diagnosis', 'therapy',
    'emergency', 'dental', 'spay', 'neuter', 'parasite', 'flea', 'tick',
    'heartworm', 'allergy', 'diet', 'exercise', 'adoption', 'rescue',
    'boarding', 'daycare', 'walker', 'sitter', 'trainer', 'behaviorist'
  ];

  private static readonly MEDICAL_KEYWORDS = [
    'health', 'medical', 'veterinary', 'treatment', 'diagnosis', 'surgery',
    'vaccine', 'vaccination', 'medicine', 'therapy', 'emergency', 'clinic',
    'hospital', 'dental', 'spay', 'neuter', 'parasite', 'allergy'
  ];

  private static readonly CONTENT_SELECTORS = [
    'article', 'section', 'main', '[role="main"]',
    '.content', '.article', '.post', '.description',
    'p', 'div[class*="text"]', 'div[class*="content"]',
    'li', 'td', '.review', '.comment'
  ];

  public static extractFromDocument(document: Document): ExtractedData {
    return {
      url: document.location?.href || '',
      title: document.title || '',
      headings: this.extractHeadings(document),
      petRelatedContent: this.extractPetContent(document),
      metadata: this.extractMetadata(document),
      extractedAt: new Date().toISOString()
    };
  }

  private static extractHeadings(document: Document): Array<{
    level: number;
    text: string;
    id: string;
  }> {
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    return Array.from(headings)
      .map(heading => ({
        level: parseInt(heading.tagName.substring(1)),
        text: this.sanitizeText(heading.textContent || ''),
        id: heading.id || ''
      }))
      .filter(heading => heading.text.length > 0);
  }

  private static extractPetContent(document: Document): Array<{
    id: string;
    text: string;
    keywords: string[];
    tagName: string;
    className: string;
    type: ContentType;
  }> {
    const elements = document.querySelectorAll(this.CONTENT_SELECTORS.join(', '));
    const petContent: Array<{
      id: string;
      text: string;
      keywords: string[];
      tagName: string;
      className: string;
      type: ContentType;
    }> = [];

    elements.forEach((element, index) => {
      const text = element.textContent?.toLowerCase() || '';
      const originalText = this.sanitizeText(element.textContent || '');
      
      // Skip if text is too short, too long, or likely navigation/UI text
      if (originalText.length < 30 || originalText.length > 2000) {
        return;
      }

      // Skip if element is likely navigation or UI
      if (this.isNavigationalElement(element)) {
        return;
      }

      const matchedKeywords = this.PET_KEYWORDS.filter(keyword => 
        text.includes(keyword.toLowerCase())
      );
      
      if (matchedKeywords.length >= 1) {
        const relevanceScore = this.calculateRelevanceScore(text, this.PET_KEYWORDS);
        
        if (relevanceScore > 0.05) { // Minimum relevance threshold
          petContent.push({
            id: `pet-content-${index}`,
            text: originalText,
            keywords: matchedKeywords,
            tagName: element.tagName.toLowerCase(),
            className: element.className || '',
            type: this.determineContentType(element, matchedKeywords)
          });
        }
      }
    });

    // Sort by relevance (keyword count) and limit results
    return petContent
      .sort((a, b) => {
        const aScore = a.keywords.length + (a.text.length / 1000);
        const bScore = b.keywords.length + (b.text.length / 1000);
        return bScore - aScore;
      })
      .slice(0, 15);
  }

  private static extractMetadata(document: Document): Record<string, string> {
    const metadata: Record<string, string> = {};
    
    // Extract standard meta tags
    const metaTags = document.querySelectorAll('meta');
    metaTags.forEach(meta => {
      const name = meta.getAttribute('name') || 
                   meta.getAttribute('property') || 
                   meta.getAttribute('http-equiv') || '';
      const content = meta.getAttribute('content') || '';
      
      if (name && content) {
        metadata[name] = content;
      }
    });

    // Extract Open Graph data
    const ogTags = document.querySelectorAll('meta[property^="og:"]');
    ogTags.forEach(meta => {
      const property = meta.getAttribute('property') || '';
      const content = meta.getAttribute('content') || '';
      if (property && content) {
        metadata[property] = content;
      }
    });

    // Extract Twitter Card data
    const twitterTags = document.querySelectorAll('meta[name^="twitter:"]');
    twitterTags.forEach(meta => {
      const name = meta.getAttribute('name') || '';
      const content = meta.getAttribute('content') || '';
      if (name && content) {
        metadata[name] = content;
      }
    });

    // Extract structured data (JSON-LD)
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    scripts.forEach((script, index) => {
      try {
        const jsonData = JSON.parse(script.textContent || '');
        metadata[`structured_data_${index}`] = JSON.stringify(jsonData, null, 2);
      } catch (e) {
        // Ignore invalid JSON
      }
    });

    return metadata;
  }

  private static calculateRelevanceScore(text: string, keywords: string[]): number {
    const words = text.split(/\s+/).length;
    const keywordMatches = keywords.filter(keyword => text.includes(keyword)).length;
    const density = keywordMatches / Math.max(words, 1);
    
    // Boost score for medical/health content
    const medicalBoost = this.MEDICAL_KEYWORDS.some(keyword => text.includes(keyword)) ? 0.1 : 0;
    
    return density + medicalBoost;
  }

  private static determineContentType(element: Element, keywords: string[]): ContentType {
    const className = element.className.toLowerCase();
    const tagName = element.tagName.toLowerCase();
    const textContent = element.textContent?.toLowerCase() || '';
    
    // Check for medical/health related content
    if (keywords.some(k => this.MEDICAL_KEYWORDS.includes(k)) ||
        className.includes('medical') || className.includes('health')) {
      return 'medical';
    }
    
    // Check for product-related content
    if (className.includes('product') || className.includes('item') || 
        tagName === 'li' && element.closest('[class*="product"]') ||
        textContent.includes('price') || textContent.includes('buy') ||
        textContent.includes('purchase') || textContent.includes('order')) {
      return 'product';
    }
    
    // Check for review content
    if (className.includes('review') || className.includes('rating') ||
        className.includes('comment') || className.includes('feedback') ||
        className.includes('testimonial') || textContent.includes('stars') ||
        textContent.includes('rating') || /\d+\/\d+/.test(textContent)) {
      return 'review';
    }
    
    // Check for article content
    if (tagName === 'article' || className.includes('article') || 
        className.includes('post') || className.includes('blog') ||
        className.includes('news') || className.includes('story')) {
      return 'article';
    }
    
    return 'pet-related';
  }

  private static isNavigationalElement(element: Element): boolean {
    const className = element.className.toLowerCase();
    const tagName = element.tagName.toLowerCase();
    const role = element.getAttribute('role');
    
    // Skip navigation, header, footer, sidebar elements
    const navPatterns = [
      'nav', 'menu', 'header', 'footer', 'sidebar', 'aside',
      'breadcrumb', 'pagination', 'toolbar', 'banner'
    ];
    
    const isNavByClass = navPatterns.some(pattern => className.includes(pattern));
    const isNavByTag = ['nav', 'header', 'footer', 'aside'].includes(tagName);
    const isNavByRole = role !== null && ['navigation', 'banner', 'complementary'].includes(role);
    
    return isNavByClass || isNavByTag || isNavByRole;
  }

  private static sanitizeText(text: string): string {
    return text
      .replace(/\s+/g, ' ')
      .replace(/\n\s*\n/g, '\n')
      .trim();
  }
}
