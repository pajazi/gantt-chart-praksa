import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { HYDRATE } from 'next-redux-wrapper'
// import baseQuery from '@/redux/baseQuery'
// import TAGS from './cacheTags'

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/' }),
    endpoints: () => ({}),
})

export default api
