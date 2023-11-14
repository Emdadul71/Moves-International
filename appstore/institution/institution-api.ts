import { apiSlice } from "../api-slice";

export const institutionApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getAllInstitution: build.query({
      query: ({ queryString }) => {
        return `public/institute/all${queryString}`;
      },
    }),
    getSingleInstitute: build.query({
      query: ({ queryString }) => {
        return `/public/institute/find-one${queryString}`;
      },
    }),
  }),
});

export const { useGetAllInstitutionQuery, useGetSingleInstituteQuery } =
  institutionApi;
