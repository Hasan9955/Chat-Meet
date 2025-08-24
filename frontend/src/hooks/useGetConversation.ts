import { useEffect, useState } from "react";
import toast from "react-hot-toast";



const useGetConversation = () => {

   const [loading, setLoading] = useState(false);
   const [ conversations, setConversation] = useState([]);


   useEffect(( ) => {
    const getConversations = async () => {
        try {
       const res = await fetch('/api/users');
       const data = await res.json();
       if(data.error) {
        throw new Error('An error occurred while fetching conversations');
       }     

       setConversation(data);
        } catch (error) {
            toast.error("An error occurred while fetching conversations");
        } finally {
            setLoading(false);
        }
    }

    getConversations();
   }, [])


   return { loading, conversations };
}


export default useGetConversation;