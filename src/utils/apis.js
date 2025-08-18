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

export const allDataAPI = (data) => {
    try {
        console.log("inside api function..")
        // let response = axiosInstance.post(
        //     "",
        //     data
        // )
        // return response;
        return [
            "abc", "def"
        ]
    }
    catch (error) {

    }
}