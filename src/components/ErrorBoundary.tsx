import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Heart, RefreshCw } from 'lucide-react';
import { Logo } from './Logo';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    // Check if this is an authentication-related error
    const errorMessage = error.message || '';
    if (errorMessage.includes('Unauthorized') || 
        errorMessage.includes('Authentication') ||
        errorMessage.includes('Session') ||
        errorMessage.includes('401')) {
      console.log('🔐 Authentication error caught by boundary - will show fallback');
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--color-bg-page)' }}>
          <div className="text-center space-y-4 max-w-sm px-4">
            <div className="flex items-center justify-center mb-4">
              <Logo iconSize={24} />
            </div>
            
            <div className="space-y-4">
              <h2 style={{ 
                color: 'var(--color-text-primary)',
                fontSize: 'var(--text-lg)',
                fontWeight: 'var(--font-weight-medium)'
              }}>
                Something went wrong
              </h2>
              
              <p style={{ 
                color: 'var(--color-text-muted)',
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--line-height-md)'
              }}>
                Don't worry, we're here to help. Please try refreshing the page.
              </p>
              
              {this.state.error && (
                <details className="text-left">
                  <summary style={{ 
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--text-xs)',
                    cursor: 'pointer'
                  }}>
                    Technical details
                  </summary>
                  <pre style={{ 
                    color: 'var(--color-text-muted)',
                    fontSize: 'var(--text-xs)',
                    marginTop: 'var(--spacing-2)',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word'
                  }}>
                    {this.state.error.message}
                  </pre>
                </details>
              )}
              
              <button
                onClick={this.handleReset}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-colors"
                style={{
                  backgroundColor: 'var(--color-primary-default)',
                  color: 'var(--color-primary-on)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-weight-medium)'
                }}
              >
                <RefreshCw size={16} />
                Try Again
              </button>
            </div>
            
            <div className="mt-6 pt-4 border-t" style={{ borderColor: 'var(--color-border-light)' }}>
              <p style={{ 
                color: 'var(--color-text-muted)',
                fontSize: 'var(--text-xs)',
                lineHeight: 'var(--line-height-md)'
              }}>
                <strong>Crisis Resources:</strong><br />
                US: Call or text 988 for immediate help<br />
                International: Visit findahelpline.com
              </p>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}