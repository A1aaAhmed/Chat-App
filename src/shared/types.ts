export interface IUser {
    id: string;
    name: string;
  }
  

 export interface IMessage {
    id: string | number;
    text: string;
    timestamp: string;
    sender: IUser;
    image?: string;
    fileSize?: string;
    status?: string; // e.g., "✔" for read
  }