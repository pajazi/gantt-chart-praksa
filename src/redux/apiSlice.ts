import { createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import baseQuery from '@/redux/baseQuery'
import TAGS from './cacheTags'

export const api = createApi({
    tagTypes: Object.values(TAGS),
    baseQuery,
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: () => ({}),
})

export default api
