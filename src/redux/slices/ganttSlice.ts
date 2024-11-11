import { api } from '../apiSlice'
import TAGS from '../cacheTags'

const extendedApi = api.injectEndpoints({
    endpoints: (build) => ({
        getGanttEvents: build.query<any>({
            query: (params) => ({
                url: `events/`,
                params,
            }),
            providesTags: [TAGS.ganttEvents],
        }),
    }),
})

export const { useGetGanttEventsQuery } = extendedApi
