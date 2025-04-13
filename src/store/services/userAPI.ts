import axios from "axios";
import { IUser } from "../../shared/types";

export const fetchUserAPI = async (userId:string): Promise<IUser> => {
  const res = await axios.get(`https://chatapp-backend-production-445b.up.railway.app/userProfile/${userId}`);
  return res.data
}