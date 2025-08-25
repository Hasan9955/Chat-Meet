import { create } from "zustand";
import { TConversation } from "../types/conversationType";
import TMessage from "../types/messageType";





interface ConversationState {
  selectedConversation: TConversation | null;
  setSelectedConversation: (conversation: TConversation | null) => void;
  messages: TMessage[];
  setMessages: (messages: TMessage[]) => void;
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) => set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useConversation;
