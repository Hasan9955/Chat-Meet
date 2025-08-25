interface TMessage {
  _id: string;
  senderId: string;
  receiverId: string;
  message: string;
  createdAt: Date; 
  updatedAt: Date
}


export default TMessage;