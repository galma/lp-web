import { axios } from "@/libs/axios";
import { UserRecordsDTO, UserRecordsResponse } from "@/types/operation";

export const getUserRecords = async (
  data: UserRecordsDTO
): Promise<UserRecordsResponse> => {
  let url = `/users/${data.userId}/records`;

  const qs = [];

  if (data.page) {
    qs.push(`page=${data.page}`);
  }

  if (data.limit) {
    qs.push(`limit=${data.limit}`);
  }

  if (qs.length > 0) {
    url = url + "?" + qs.join("&");
  }

  const result = await axios.get(url);
  return result?.data;
};
