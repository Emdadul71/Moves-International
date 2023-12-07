import { apiSlice } from "../api-slice";

export const appointmentApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    createAppointment: build.mutation({
      query: (data) => ({
        url: "/public/appointment",
        method: "POST",
        body: data,
      }),
    }),
    getCounsellor: build.query({
      query: ({ queryString }) => {
        return `public/counsellor${queryString}`;
      },
    }),
    getCounsellorTimeSlot: build.query({
      query: ({ queryString }) => {
        return `public/appointment/available-slot${queryString}`;
      },
      keepUnusedDataFor: 0,
    }),
    getCounsellorServices: build.query({
      query: () => {
        return `public/team-service`;
      },
    }),
  }),
});

export const {
  useCreateAppointmentMutation,
  useGetCounsellorQuery,
  useGetCounsellorServicesQuery,
  useGetCounsellorTimeSlotQuery,
} = appointmentApi;
