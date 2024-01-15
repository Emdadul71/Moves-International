import { apiSlice } from "@/appstore/api-slice";

export const inquiryApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createInquiry: build.mutation({
      query: (data) => ({
        url: "/public/inquiry",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateInquiryMutation } = inquiryApi;
