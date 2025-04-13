import axios from "axios";
import { IMessage,LastMessage,UserLastMessage } from "../../shared/types";

interface IMessageResponse {
  _id: string;
  text: string;
  receiver_id: string;
  sender_id: string;
}
const logedUserId ="1"
export const fetchMessagesAPI = async (contactId:string): Promise<IMessage[]> => {
  const res = await axios.get(`https://chatapp-backend-production-445b.up.railway.app/messages/between?userId=${logedUserId}&otherUserId=${contactId}`);
  return res.data.map((message: IMessageResponse) => {
    return {
      id: message._id,
      text: message.text,
      timestamp: '11:40',
      sender: message.sender_id,
      image:'',
      // image: 'https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg', 
      // fileSize: '0MB', 
      fileSize: '', 
      status: "✔"
    };
  });
}
export const fetchAllMessagesAPI = async (): Promise<UserLastMessage[]> => {
  const res = await axios.get(`https://chatapp-backend-production-445b.up.railway.app/messages/all?userId=${logedUserId}`);
  return res.data.map((data:LastMessage) => {
    return {
      id: data._id,
      text:data.lastMessage.text,
      name: data.name,
      img:data.img,

    };
  });
  
};
