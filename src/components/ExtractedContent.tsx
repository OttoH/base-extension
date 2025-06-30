import React from 'react';
import { Box, Card, CardContent, CardHeader, Typography, Chip } from '@mui/material';
import { ExtractedData, ContentType } from '../types';

interface ExtractedContentProps {
  data: ExtractedData;
}

export const ExtractedContent: React.FC<ExtractedContentProps> = ({ data }) => {
  const getContentTypeColor = (type: ContentType) => {
    switch (type) {
      case 'medical':
        return { color: 'error' as const };
      case 'product':
        return { color: 'info' as const };
      case 'review':
        return { color: 'success' as const };
      case 'article':
        return { color: 'secondary' as const };
      default:
        return { color: 'primary' as const };
    }
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <Box sx={{ maxHeight: 384, overflowY: 'auto' }}>
      {/* Headings Section */}
      {data.headings.length > 0 && (
        <Card sx={{ mb: 2 }}>
          <CardHeader sx={{ pb: 1 }}>
            <Typography variant="h3">
              Page Headings ({data.headings.length})
            </Typography>
          </CardHeader>
          <CardContent sx={{ pt: 0 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {data.headings.slice(0, 5).map((heading, index) => (
                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Chip 
                    label={`H${heading.level}`} 
                    size="small" 
                    variant="outlined"
                    sx={{ fontSize: '0.625rem', height: 'auto', py: 0.25 }}
                  />
                  <Typography variant="caption" sx={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {heading.text}
                  </Typography>
                </Box>
              ))}
              {data.headings.length > 5 && (
                <Typography variant="caption" color="text.secondary">
                  ...and {data.headings.length - 5} more
                </Typography>
              )}
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Pet Content Section */}
      {data.petRelatedContent.length > 0 ? (
        <Box>
          <Typography variant="h3" sx={{ mb: 2 }}>
            Pet-Related Content ({data.petRelatedContent.length})
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {data.petRelatedContent.map((content, index) => (
              <Card key={content.id}>
                <CardContent sx={{ p: 1.5 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                    <Chip 
                      label={content.type} 
                      size="small"
                      {...getContentTypeColor(content.type)}
                      sx={{ fontSize: '0.625rem', height: 'auto', py: 0.25 }}
                    />
                    <Chip 
                      label={content.tagName} 
                      size="small" 
                      color="secondary"
                      sx={{ fontSize: '0.625rem', height: 'auto', py: 0.25 }}
                    />
                  </Box>
                  
                  <Typography variant="caption" sx={{ display: 'block', mb: 1, lineHeight: 1.4 }}>
                    {truncateText(content.text)}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {content.keywords.slice(0, 4).map((keyword, keyIndex) => (
                      <Chip 
                        key={keyIndex} 
                        label={keyword} 
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ fontSize: '0.5625rem', height: 'auto', py: 0.125 }}
                      />
                    ))}
                    {content.keywords.length > 4 && (
                      <Chip 
                        label={`+${content.keywords.length - 4}`}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ fontSize: '0.5625rem', height: 'auto', py: 0.125 }}
                      />
                    )}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ) : (
        <Card>
          <CardContent sx={{ p: 3, textAlign: 'center' }}>
            <Box sx={{ color: 'text.secondary' }}>
              <svg 
                style={{ width: 32, height: 32, margin: '0 auto 8px', display: 'block' }}
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
              <Typography variant="body2">No pet-related content found</Typography>
              <Typography variant="caption" sx={{ mt: 0.5, display: 'block' }}>
                Try visiting a pet, veterinary, or animal-related website
              </Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};
