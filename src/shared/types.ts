export interface IUser {
    id: string;
    name: string;
    email?:string ;
    phone?: string;
    bio?:string
  }
  

 export interface IMessage {
    id: string | number;
    text: string;
    timestamp: string;
    sender_id:string ;
    receiver_id: string;
    image?: string;
    fileSize?: string;
    status?: string; // e.g., "✔" for read
  }
// freinds {
//   user_id:
//   freind_id
// }