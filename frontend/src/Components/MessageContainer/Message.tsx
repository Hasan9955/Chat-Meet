import { useAuth } from "../../Context/useAuth";
import useConversation from "../../store.zustand/useConversation";
import TMessage from "../../types/messageType";
import extractTime from "../../utils/extractTime";


const Message = ({ message }: { message: TMessage }) => {

    const { authUser } = useAuth();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === authUser?._id;
    const formattedTime = extractTime(message.createdAt);
    const chatClassName = fromMe ? "chat-end" : "chat-start";
    const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
    const bubbleBgColor = fromMe ? "bg-blue-500" : "";



    return (
        <div className={`chat ${chatClassName} mb-2`}>
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={profilePic} alt="" />
                </div>

            </div>
            <div className={`chat-bubble text-white pb-2 ${bubbleBgColor}`}>{message.message}</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>{formattedTime}</div>
        </div>
    );
};

export default Message;