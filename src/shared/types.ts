export interface IUser {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  bio?: string
  userImg?: string;
}


export interface IMessage {
  id: string | number;
  text: string;
  timestamp: string;
  sender: string;
  receiver_id: string;
  image?: string;
  fileSize?: string;
  status?: string; // e.g., "✔" for read
}
// freinds {
//   user_id:
//   freind_id
// }
export interface UserLastMessage {
    text: string ;
   name: string;
   img: string ;
   id:string
}
export interface LastMessage {
   lastMessage: { text: string };
   name: string;
   img: string ;
   _id:string
}
