declare global {
  interface Window {
    gtag?: (
      event: string,
      action: string,
      // eslint-disable-next-line unicorn/prevent-abbreviations
      params?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        [key: string]: any; // Allow other custom properties
      }
    ) => void;
  }
}

export {};
