import { api } from '../apiSlice'
import TAGS from '../cacheTags'

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        getGanttEvents: build.query({
            query: () => 'events',
            transformResponse: (response) => {
                return response
            },
            invalidatesTags: [TAGS.ganttEvents],
        }),
    }),
})

export const { useGetGanttEventsQuery } = extendedApi
