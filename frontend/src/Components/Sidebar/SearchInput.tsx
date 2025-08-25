import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import useConversation from "../../store.zustand/useConversation";
import toast from "react-hot-toast";
import useGetConversation from "../../hooks/useGetConversation";
import { TConversation } from "../../types/conversationType";

const SearchInput = () => {

    const [search, setSearch] = useState("");
    const { setSelectedConversation } = useConversation();
    const { conversations } = useGetConversation();


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!search) return;

        if (search.length < 3) {
            toast.error("Search term must be at least 3 characters long.");
        }

        const conversation = conversations.find((c: TConversation) => c.fullName.toLowerCase().includes(search.toLowerCase()));
        if(conversation) {
            setSelectedConversation(conversation);
            setSearch("");
        } else toast.error("No user found.");

    }

    return (
        <form className="flex items-center gap-5 p-5" onSubmit={handleSubmit}>
            <input type="text" placeholder="🔍 Search..." className="input input-bordered w-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" className="btn btn-circle btn-md bg-blue-500 rounded-full ">
                <IoMdSearch className="text-xl text-white" />
            </button>
        </form>
    );
};

export default SearchInput;