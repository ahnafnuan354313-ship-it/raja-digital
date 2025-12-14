export interface PricingPackage {
  id: string;
  name: string;
  hours: number;
  price: string;
  originalPrice: string;
  features: string[];
  recommended?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  id: number;
  name: string;
  channel: string;
  comment: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}
