import { api } from '../apiSlice'

const partnerSlice = api.injectEndpoints({
    endpoints: (build) => ({
        getPartners: build.query({
            query: () => 'partners',
            transformResponse: (response) => {
                console.log(response)
                return response
            },
        }),
    }),
})

export const { useGetPartnersQuery } = partnerSlice
