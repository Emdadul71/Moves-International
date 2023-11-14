import { apiSlice } from "../api-slice";

export const contactApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createContact: build.mutation({
      query: (data) => ({
        url: "/public/contact",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateContactMutation } = contactApi;
