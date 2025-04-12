import axios from "axios";
import { IMessage } from "../../shared/types";

interface IMessageResponse {
  _id: string;
  message: string;
  to: string;
}

export const fetchMessagesAPI = async (): Promise<IMessage[]> => {
  const res = await axios.get("https://chatapp-backend-production-445b.up.railway.app/messages");
  console.log(res.data);
  return res.data.map((message: IMessageResponse) => {
    return {
      id: message._id,
      text: message.message,
      timestamp: '11:40',
      sender: message.to,
      image:'',
      // image: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg', 
      // fileSize: '0MB', 
      fileSize: '', 
      status: "✔"
    };
  });
  
};
