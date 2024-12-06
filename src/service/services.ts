import { Axios } from './axios-config'
export const Service = {
    GetHotelQuery: async (body?: any) => {
        const { data } = await Axios.get(`hotels/searchDestination${body ? body : ''}`);
        return data
    },
    GetActivitiesQuery: async (body: any) => {
        const { data } = await Axios.get(`attraction/searchLocation${body ? body : ''}`);
        return data
    },
    GetFlightQuery: async (body: any) => {
        const { data } = await Axios.get(`flights/searchDestination${body ? body : ''}`);
        return data
    },
};
