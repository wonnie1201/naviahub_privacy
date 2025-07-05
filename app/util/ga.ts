export const GA_TRACKING_ID = 'G-VJZ6BDDVFM';

export function gtag(event: string, params: Record<string, any>) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event, params);
  }
}

export function pageview(url: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag('event', 'page_view', {
      page_path: url,
    });
  }
} 