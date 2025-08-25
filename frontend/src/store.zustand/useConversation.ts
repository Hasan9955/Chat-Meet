import { create } from "zustand";
import { TConversation } from "../types/conversation";



interface Message {
  id: string;
  conversationId: string;
  sender: string;
  content: string;
  timestamp: Date;
  // Add more fields as needed
}

interface ConversationState {
  selectedConversation: TConversation | null;
  setSelectedConversation: (conversation: TConversation | null) => void;
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
