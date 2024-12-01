import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import baseQuery from './baseQuery'
import TAGS from './cacheTags'

export const api = createApi({
    // reducerPath: 'api',
    // baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    // endpoints: () => ({}),
    tagTypes: [TAGS.ganttEvents, TAGS.ganttPartners],
    baseQuery,
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: () => ({}),
})

export default api
