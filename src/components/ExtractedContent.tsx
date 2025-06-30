import React from 'react';
import { Badge } from './ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ExtractedData, ContentType } from '../types';

interface ExtractedContentProps {
  data: ExtractedData;
}

export const ExtractedContent: React.FC<ExtractedContentProps> = ({ data }) => {
  const getContentTypeColor = (type: ContentType) => {
    switch (type) {
      case 'medical':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'product':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'review':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'article':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-soulvet-light text-soulvet-brown border-soulvet-brown/20';
    }
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div className="space-y-4 max-h-96 overflow-y-auto">
      {/* Headings Section */}
      {data.headings.length > 0 && (
        <Card className="border-soulvet-brown/10">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-soulvet-brown">
              Page Headings ({data.headings.length})
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {data.headings.slice(0, 5).map((heading, index) => (
              <div key={index} className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  H{heading.level}
                </Badge>
                <span className="text-xs text-soulvet-brown/80 truncate">
                  {heading.text}
                </span>
              </div>
            ))}
            {data.headings.length > 5 && (
              <p className="text-xs text-soulvet-brown/60">
                ...and {data.headings.length - 5} more
              </p>
            )}
          </CardContent>
        </Card>
      )}

      {/* Pet Content Section */}
      {data.petRelatedContent.length > 0 ? (
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-soulvet-brown">
            Pet-Related Content ({data.petRelatedContent.length})
          </h3>
          {data.petRelatedContent.map((content, index) => (
            <Card key={content.id} className="border-soulvet-brown/10">
              <CardContent className="p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${getContentTypeColor(content.type)}`}
                  >
                    {content.type}
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    {content.tagName}
                  </Badge>
                </div>
                
                <p className="text-xs text-soulvet-brown/80 leading-relaxed">
                  {truncateText(content.text)}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {content.keywords.slice(0, 4).map((keyword, keyIndex) => (
                    <Badge key={keyIndex} className="text-xs bg-soulvet-accent/10 text-soulvet-accent">
                      {keyword}
                    </Badge>
                  ))}
                  {content.keywords.length > 4 && (
                    <Badge className="text-xs bg-soulvet-accent/10 text-soulvet-accent">
                      +{content.keywords.length - 4}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="border-soulvet-brown/10">
          <CardContent className="p-4 text-center">
            <div className="text-soulvet-brown/60">
              <svg 
                className="w-8 h-8 mx-auto mb-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                />
              </svg>
              <p className="text-sm">No pet-related content found</p>
              <p className="text-xs mt-1">
                Try visiting a pet, veterinary, or animal-related website
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
