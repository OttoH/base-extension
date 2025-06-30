import { ExtractedData } from './types';
declare class ContentExtractor {
    private static instance;
    static getInstance(): ContentExtractor;
    constructor();
    private setupMessageListener;
    private observePageChanges;
    private debounceTimer;
    private notifyContentChange;
    extractPageContent(): ExtractedData;
    private extractHeadings;
    private extractPetContent;
    private calculateRelevanceScore;
    private determineContentType;
    private extractMetadata;
}
export default ContentExtractor;
//# sourceMappingURL=content.d.ts.map