import { fetchBaseQuery } from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.API_BASE_URL,
    prepareHeaders: (headers) => {
        headers.set('Accept', 'application/json')
        return headers
    },
})

export default baseQuery
