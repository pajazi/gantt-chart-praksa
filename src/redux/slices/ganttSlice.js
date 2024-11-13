import { api } from '../apiSlice'
import TAGS from '../cacheTags'

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        getGanttEvents: build.query({
            query: (params) => ({
                url: `events/`,
                params,
            }),
            // query: () => 'events',
            // transformResponse: (response) => {
            //     return response
            // },

            providesTags: [TAGS.ganttEvents],
        }),
    }),
})

export const { useGetGanttEventsQuery } = extendedApi
