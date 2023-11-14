import { apiSlice } from "../api-slice";

export const testimonialsApi = apiSlice.injectEndpoints({
  endpoints: (build: any) => ({
    getTestimonials: build.query({
      query: ({ page = 1, limit = 10 }) => {
        return `/public/testimonials?&page=${page}&limit=${limit}`;
      },
    }),
  }),
});

export const { useGetTestimonialsQuery } = testimonialsApi;
