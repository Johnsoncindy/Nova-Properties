export interface Property {
  id: number;
  images: string[];
  title: string;
  description: string;
  bedrooms?: number;
  bathrooms?: number;
  area: number;
  price: string;
  isFeatured: boolean;
  tag: string;
  location: string;
  type: string;
  features?: string[];
  additionalDetails?: string[];
  agent: string;
}
