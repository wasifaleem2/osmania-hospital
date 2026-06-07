import { axiosInstance } from "./instances";

export const reportsAPI = async ({ data, nic }) => {
  const response = await axiosInstance.get(`client/by-nic/${nic}`, {
    params: { ...data },
  });
  const client = response.data.data.client;
  return {
    data: {
      nic:         client.regNo,
      name:        client.name,
      email:       client.email,
      phoneNumber: client.phoneNumber,
      records:     client.records || [],
    },
  };
};

export const allDataAPI = async (datafor) => {
  const response = await axiosInstance.get("blogs", { params: datafor });
  return {
    data: {
      blogs: response.data.data.blogs,
      ...response.data.meta,
    },
  };
};
