export type Country = {
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
  languages?: [];
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

export type CountryOfDay = {
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
  fun_fact?: string;
  date?: string;
  is_active?: boolean;
};

export type PhotoOfDay = {
  id: number;
  title: string;
  location: string;
  name: string;
  capital?: string;
  continent?: string;
  continent_display?: string;
  population?: number;
  area?: number;
  flag?: string;
  image?: string | null;
  slug?: string;
  description?: string;
  date?: string;
  is_active?: boolean;
};