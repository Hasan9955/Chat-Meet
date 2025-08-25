interface TMessage {
  id: string;
  conversationId: string;
  sender: string;
  content: string;
  timestamp: Date; 
}

export default TMessage;