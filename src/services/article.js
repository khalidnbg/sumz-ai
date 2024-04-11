// This is a Redux Toolkit API slice file for interacting with the article extraction API
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Reading the API key from environment variables
const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// Creating the article API with necessary headers
export const articleApi = createApi({
  // Setting a unique name for the reducer path
  reducerPath: "articleApi",
  // Configuring the base query for making requests
  baseQuery: fetchBaseQuery({
    // Setting the base URL for the API
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      // Modifying headers to include the RapidAPI key and host
      headers.set("X-RapidAPI-Key", rapidApiKey);
      headers.set(
        "X-RapidAPI-Host",
        "article-extractor-and-summarizer.p.rapidapi.com"
      );

      return headers;
    },
  }),

  // Defining API endpoints
  endpoints: (builder) => ({
    // Defining an endpoint for getting article summaries
    getSummary: builder.query({
      // encodeURIComponent() function encodes special characters that may be present in the parameter values
      // If we do not properly encode these characters, they can be misinterpreted by the server and cause
      // errors or unexpected behavior. Thus that RTK bug

      // Configuring the query function for the endpoint
      query: (params) =>
        // Constructing the query URL with the article URL and summary length
        `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
    }),
  }),
});

// Exporting a hook for using the getSummary endpoint
export const { useLazyGetSummaryQuery } = articleApi;

/*
Explanation:

The articleApi object is created using the createApi function from Redux Toolkit. It defines the API 
configuration, including the base URL, headers, and endpoints.
The reducerPath is set to "articleApi" to provide a unique namespace for the reducer in the Redux store.
The baseQuery is configured using fetchBaseQuery, which allows customization of headers for each request.
The prepareHeaders function modifies the headers to include the RapidAPI key and host required for the API requests.
The endpoints object defines the API endpoints. In this case, there is only one endpoint called getSummary 
for fetching article summaries.
The getSummary endpoint is configured with a query function that constructs the URL for fetching summaries 
based on the article URL and summary length.
Finally, the useLazyGetSummaryQuery hook is exported from the articleApi object, which can be used to fetch 
article summaries lazily in React components.
*/
