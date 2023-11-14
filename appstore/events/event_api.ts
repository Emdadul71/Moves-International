import { apiSlice } from "../api-slice";

export const eventApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.query({
      query: ({ page, limit }) => {
        return `/public/events?status=ACTIVE&page=${page}&limit=${limit}`;
      },
    }),
  }),
});

export const { useGetEventsQuery } = eventApi;
