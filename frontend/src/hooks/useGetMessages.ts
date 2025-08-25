import { useEffect, useState } from "react";
import useConversation from "../store.zustand/useConversation";




const useGetMessages = () => {

    const [loading, setLoading] = useState(false);
    const {messages, setMessages, selectedConversation} = useConversation();


    useEffect(() => {
        const getMessages = async () => {
            setLoading(true)
            try {
                const res = await fetch(`/api/messages/${selectedConversation?._id}`);
                const data = await res.json();
                if (data.error) throw new Error(data.error);

                setMessages(data);

            } catch (error) {
                console.log("An error is occurred from get messages functionality.")
            } finally {
                setLoading(false)
            }
        }

        if(selectedConversation?._id) getMessages();

    }, [selectedConversation, setMessages]);

    return {loading, messages}; 
}


export default useGetMessages;