import { type ClassValue } from 'clsx';
export declare function cn(...inputs: ClassValue[]): string;
export declare function formatDate(date: string | Date): string;
export declare function truncateText(text: string, maxLength: number): string;
export declare function debounce<T extends (...args: any[]) => any>(func: T, wait: number): (...args: Parameters<T>) => void;
export declare function isValidUrl(string: string): boolean;
export declare function extractDomain(url: string): string;
export declare function sanitizeText(text: string): string;
export declare function highlightKeywords(text: string, keywords: string[]): string;
//# sourceMappingURL=utils.d.ts.map