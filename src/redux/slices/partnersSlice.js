import { api } from '../apiSlice'
import TAGS from '../cacheTags'

const partnerSlice = api.injectEndpoints({
    endpoints: (build) => ({
        getPartners: build.query({
            query: () => 'partners',
            transformResponse: (response) => {
                return response
            },
            providesTags: [TAGS.ganttPartners],
        }),
    }),
})

export const { useGetPartnersQuery } = partnerSlice
