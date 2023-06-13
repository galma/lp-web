import { axios } from "@/libs/axios";
import { DeleteUserRecordDTO } from "@/types/operation";

export const deleteUserRecord = async (
  data: DeleteUserRecordDTO
): Promise<void> => {
  let url = `/users/${data.userId}/records/${data.recordId}`;
  const result = await axios.delete(url);
  return result?.data;
};
