export interface Benefit {
  id: string;
  title: string;
  description: string;
  badge?: string;
  tagline: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  urgency: string; // "Alta Urgência", "Imediato", etc
  details: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  status: string; // "Liminar Deferida", "Medicamento Liberado", etc.
  description: string;
  local: string; // "Salvador - BA", etc.
  resultTime: string; // "24 a 48 horas"
  beforeImgUrl: string; // Will use high quality conceptual placeholders OR generative content descriptions
  afterImgUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  avatarUrl: string;
}

export interface GoogleReview {
  id: string;
  author: string;
  relativeTime: string;
  rating: number;
  snippet: string;
  avatarLetter: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
