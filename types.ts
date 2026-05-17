
export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  role?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  isComingSoon?: boolean;
}

export interface HealthTip {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
}

export interface CampEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  image: string;
}
