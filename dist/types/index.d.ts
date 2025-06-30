export type ContentType = 'pet-related' | 'medical' | 'product' | 'review' | 'article';
export interface ExtractedData {
    url: string;
    title: string;
    headings: Array<{
        level: number;
        text: string;
        id: string;
    }>;
    petRelatedContent: Array<{
        id: string;
        text: string;
        keywords: string[];
        tagName: string;
        className: string;
        type: ContentType;
    }>;
    metadata: Record<string, string>;
    extractedAt: string;
}
export interface ExtensionMessage {
    action: string;
    data?: any;
    tabId?: number;
    success?: boolean;
    error?: string;
}
export interface ExtensionSettings {
    autoExtract: boolean;
    petKeywords: string[];
    minContentLength: number;
    maxResults: number;
    enableNotifications: boolean;
}
export interface StorageData {
    extractedData?: ExtractedData;
    settings?: ExtensionSettings;
    lastExtraction?: ExtractedData;
    lastExtractionTabId?: number;
}
//# sourceMappingURL=index.d.ts.map