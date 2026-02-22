import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { type AcceptInviteRequestData } from "../../types";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://baptism-invite-api.vercel.app/api",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  endpoints: (builder) => ({
    sendInviteResponse: builder.mutation({
      query: (data: AcceptInviteRequestData) => ({
        url: "/send",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useSendInviteResponseMutation } = api;
