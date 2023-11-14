import { apiSlice } from "../api-slice";

export const teamApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getTeam: build.query({
      query: ({ page, limit }) => {
        return `/public/team?page=${page}&limit=${limit}`;
      },
    }),
  }),
});

export const { useGetTeamQuery } = teamApi;
