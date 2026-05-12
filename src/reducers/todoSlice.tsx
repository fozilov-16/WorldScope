import { createSlice } from "@reduxjs/toolkit";
import {
  getCountries,
  getCountryById,
  getCountriesTopArea,
  getCountriesTopPopulation,
  getCountriesTopGdp,
  getCountryRandom,
  getCountryOfDay,
  getPhotoOfDay,
} from "./api";

import type {
  Country,
  CountryOfDay,
  PhotoOfDay,
  CountryById,
} from "../types";

interface CountryState {
  data: Country[];
  countryById: CountryById | null; // ✅ FIX
  random: Country[];
  countryOfDay: CountryOfDay[];
  photoOfDay: PhotoOfDay[];
  topAreaData: Country[];
  topPopulationData: Country[];
  topGdpData: Country[];
  loading: boolean;
  error: string | null;
}

const initialState: CountryState = {
  data: [],
  countryById: null, // ✅ FIX
  random: [],
  countryOfDay: [],
  photoOfDay: [],
  topAreaData: [],
  topPopulationData: [],
  topGdpData: [],
  loading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers(builder) {
    // 🔹 getCountries
    builder
      .addCase(getCountries.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload?.results ?? [];
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });

    // 🔹 getCountryById (FIXED)
    builder
      .addCase(getCountryById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountryById.fulfilled, (state, action) => {
        state.loading = false;
        state.countryById = action.payload; // ✅ FIX (NO results)
      })
      .addCase(getCountryById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });

    // 🔹 getCountryRandom
    builder
      .addCase(getCountryRandom.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountryRandom.fulfilled, (state, action) => {
        state.loading = false;
        state.random = action.payload?.results ?? [];
      })
      .addCase(getCountryRandom.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });

    // 🔹 getCountriesTopArea
    builder
      .addCase(getCountriesTopArea.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountriesTopArea.fulfilled, (state, action) => {
        state.loading = false;
        state.topAreaData = Array.isArray(action.payload)
          ? action.payload
          : [];
      })
      .addCase(getCountriesTopArea.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });

    // 🔹 getCountriesTopPopulation
    builder
      .addCase(getCountriesTopPopulation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountriesTopPopulation.fulfilled, (state, action) => {
        state.loading = false;
        state.topPopulationData = Array.isArray(action.payload)
          ? action.payload
          : [];
      })
      .addCase(getCountriesTopPopulation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });

    // 🔹 getCountriesTopGdp
    builder
      .addCase(getCountriesTopGdp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountriesTopGdp.fulfilled, (state, action) => {
        state.loading = false;
        state.topGdpData = Array.isArray(action.payload)
          ? action.payload
          : [];
      })
      .addCase(getCountriesTopGdp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });

    // 🔹 getCountryOfDay
    builder
      .addCase(getCountryOfDay.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCountryOfDay.fulfilled, (state, action) => {
        state.loading = false;
        state.countryOfDay = action.payload?.results ?? [];
      })
      .addCase(getCountryOfDay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });

    // 🔹 getPhotoOfDay (FIXED)
    builder
      .addCase(getPhotoOfDay.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPhotoOfDay.fulfilled, (state, action) => {
        state.loading = false;
        state.photoOfDay = action.payload?.results ?? []; // ✅ FIX
      })
      .addCase(getPhotoOfDay.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error";
      });
  },
});

export default todoSlice.reducer;