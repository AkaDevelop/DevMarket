/**
 * DevMarket - Type Definitions
 * Based on DEVMARKET_PROJECT_CONTEXT.md & DESIGN.md
 */

export type SearchMode = 'services' | 'developers';

export type AvailabilityStatus = 'available' | 'limited' | 'busy';

export interface Developer {
  id: string;
  name: string;
  specialty: string;
  location: string;
  avatarUrl?: string;
  initials: string;
  availability: AvailabilityStatus;
  rating: number;
  reviewCount: number;
  bio: string;
  technologies: string[];
  completedProjectsCount: number;
}

export interface Service {
  id: string;
  title: string;
  developerId: string;
  developerName: string;
  developerSpecialty: string;
  category: string;
  rating: number;
  reviewCount: number;
  deliveryDays: number;
  startingPriceUsd: number;
  description: string;
  deliverables: string[];
  technologies: string[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  serviceCountFictional: number;
}
