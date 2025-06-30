import { ExtractedData } from '../types';
export declare class ContentExtractor {
    private static readonly PET_KEYWORDS;
    private static readonly MEDICAL_KEYWORDS;
    private static readonly CONTENT_SELECTORS;
    static extractFromDocument(document: Document): ExtractedData;
    private static extractHeadings;
    private static extractPetContent;
    private static extractMetadata;
    private static calculateRelevanceScore;
    private static determineContentType;
    private static isNavigationalElement;
    private static sanitizeText;
}
//# sourceMappingURL=contentExtractor.d.ts.map