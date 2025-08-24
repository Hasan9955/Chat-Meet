import {create} from 'zustand';

export interface Message {
    id: string;
    sender: string;
    content: string;
    timestamp: string;
}

export interface Conversation {
    id: string;
    title: string;
    messages: Array<Message>;
}


const useConversation = create((set) => ({
    selectedConversation: null as Conversation | null,
    setSelectedConversation: (selectedConversation : Conversation | null) => set({ selectedConversation }),
    message: [],
    setMessage: (message: Array<Message>) => set({ message }),
}))

export default useConversation;