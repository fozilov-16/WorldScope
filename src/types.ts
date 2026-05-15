export type Country = {
  id: number;
  name: string;
  capital: string;
  continent: string;
  continent_display: string;
  population: number;
  area: number;
  flag: string;
  image: string | null;
  slug: string;
};

export type PhotoOfDay = {
  id: number;
  title: string;
  location: string;
  image: string | null;
  description: string;
  date: string;
  is_active: boolean;
  country: Country;
};

export type CountryById = {
  id: number;
  name: string;
  capital?: string;
  continent?: string;
  continent_display?: string;
  population?: number;
  area?: number;
  flag?: string;
  image?: string | null;
  slug?: string;
  languages?: string[];
  religion?: string;
  time_zone?: string;
  calling_code?: string;
  nationality?: string;
  government_type?: string;
  president?: string;
  largest_city?: string;
  history?: string;
  description?: string;
};

export interface CountryOfDay {
  id: number;

  country: {
    id: number;
    name: string;
    capital: string;

    continent: string;
    continent_display: string;

    population: number;
    area: number;

    flag: string;
    image: string | null;

    slug: string;
  };

  fun_fact: string;

  image: string;

  date: string;

  is_active: boolean;
};

export interface AIRecognition {
  id: number;
  predicted_country: string;
  confidence: number;
  description: string;
  created_at: string;
  country_data: null;
}