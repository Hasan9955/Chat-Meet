import useGetConversation from "../../hooks/useGetConversation";
import { TConversation } from "../../types/conversation";
import getRandomEmoji from "../../utils/emojis";
import Conversation from "./Conversation";

const AllConversation = () => {

    const { conversations, loading } = useGetConversation();

    console.log("Conversations:", conversations);

    return (
        <div className="py-2 flex flex-col overflow-auto">
            {conversations.map((conversation: TConversation, idx: number) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                    emoji={getRandomEmoji()}
                    lastIdx={idx === conversations.length - 1}
                />
            ))}


            {loading ? <span className='loading loading-spinner mx-auto'></span> : null}

        </div>
    );
};

export default AllConversation;