import { axiosInstance } from "./instances"

export const reportsAPI = async ({data, nic}) => {
    try {
        console.log("inside api function..", data, nic)
        
        const response = await axiosInstance.get(
            `client/by-nic/${nic}`,
            {
                params: {
                    ...data,
                },
            },
        )
        return response;
    }
    catch (error) {
        console.log(error)
        throw error
    }
}

export const allDataAPI = (datafor) => {
    try {
        console.log("inside data api function..", datafor)
        let response = axiosInstance.get(
            "blogs",
            {
                params: {
                    ...datafor
                }
            }
        )
        return response;
    }
    catch (error) {

    }
}