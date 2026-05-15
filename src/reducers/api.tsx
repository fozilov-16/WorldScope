"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const API = process.env.NEXT_PUBLIC_URL_WORLDSCOUP;
export const MEDIA = process.env.NEXT_PUBLIC_MEDIA_URL;


type SearchParams = {
  locale: string;
  query: string;
};

type GetByIdParams = {
  id: number;
  locale: string;
};

export const getCountries = createAsyncThunk(
  "todos/getCountries",
  async (locale: string) => {
    try {
      const { data } = await axios.get(`${API}/countries/?language=${locale}`);
      return data;
    } catch (error) {
      console.error(error);
      return { results: [] };
    }
  }
);

export const getCountryById = createAsyncThunk(
  "countries/getById",
  async ({ id, locale }: GetByIdParams) => {
    try {
      const { data } = await axios.get(
        `${API}/countries/${id}/?language=${locale}`
      );
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
);

export const getCountryRandom = createAsyncThunk(
  "todos/getCountryRandom",
  async (locale: string) => {
    try {
      const { data } = await axios.get(`${API}/countries/random/?language=${locale}`);
      return data;
    } catch (error) {
      console.error(error);
      return { results: [] };
    }
  }
);

export const getCountriesTopArea = createAsyncThunk(
  "todos/getCountriesTopArea",
  async (locale: string) => {
    try {
      const { data } = await axios.get(`${API}/countries/top/area/?language=${locale}`);
      return data;
    } catch (error) {
      console.error(error);
      return { results: [] };
    }
  }
);

export const getCountriesTopPopulation = createAsyncThunk(
  "todos/getCountriesTopPopulation",
  async (locale: string) => {
    try {
      const { data } = await axios.get(`${API}/countries/top/population/?language=${locale}`);
      return data;
    } catch (error) {
      console.error(error);
      return { results: [] };
    }
  }
);

export const getCountriesTopGdp = createAsyncThunk(
  "todos/getCountriesTopGdp",
  async (locale: string) => {
    try {
      const { data } = await axios.get(`${API}/countries/top/gdp/?language=${locale}`);
      return data;
    } catch (error) {
      console.error(error);
      return { results: [] };
    }
  }
);

export const search = createAsyncThunk(
  "todos/search",
  async ({ locale, query }: SearchParams) => {
    try {
      const { data } = await axios.get(
        `${API}/countries/search/?language=${locale}&q=${query}`
      );
      return data;
    } catch (error) {
      console.error(error);
      return { results: [] };
    }
  }
);

export const getCountryOfDay = createAsyncThunk(
  "todos/getCountryOfDay",
  async (locale: string) => {
    try {
      const { data } = await axios.get(`${API}/country-of-day/?language=${locale}`);
      return data;
    } catch (error) {
      console.error(error);
      return { results: [] };
    }
  }
);

export const getPhotoOfDay = createAsyncThunk(
  "todos/getPhotoOfDay",
  async (locale: string) => {
    try {
      const { data } = await axios.get(`${API}/photo-of-day/?language=${locale}`);
      return data;
    } catch (error) {
      console.error(error);
      return { results: [] };
    }
  }
);


export const recognizeCountryAI = createAsyncThunk(
  "ai/recognizeCountryAI",
  async (image: File) => {
    try {
      const formData = new FormData();

      formData.append("image", image);

      const { data } = await axios.post(
        `${API}/ai/recognize/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
);