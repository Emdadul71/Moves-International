import { apiSlice } from "../api-slice";

export const courseApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getCourses: build.query({
      query: ({ courseQueryString }) => {
        return `public/course/all${courseQueryString}`;
      },
    }),
    getSingleCourses: build.query({
      query: ({ courseQueryString }) => {
        return `public/course/find-one${courseQueryString}`;
      },
    }),
    getlevel: build.query({
      query: ({}) => {
        return `public/course/all-level`;
      },
    }),
    getBroadField: build.query({
      query: ({}) => {
        return `public/course/all-broad`;
      },
    }),
    getNarrowField: build.query({
      query: ({ courseNarrow }) => {
        return `public/course/all-narrow/${courseNarrow}`;
      },
    }),
    getDetailedField: build.query({
      query: ({ courseDetailed }) => {
        return `public/course/all-detailed/${courseDetailed}`;
      },
    }),
    getState: build.query({
      query: ({ countrySlug }) => {
        return `public/location/all-state/${countrySlug}`;
      },
    }),
  }),
});

export const {
  useGetCoursesQuery,
  useGetSingleCoursesQuery,
  useGetlevelQuery,
  useGetBroadFieldQuery,
  useGetNarrowFieldQuery,
  useGetDetailedFieldQuery,
  useGetStateQuery,
} = courseApi;
