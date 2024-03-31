import { IoMdSearch } from "react-icons/io";

const SearchInput = () => {
    return (
        <form className="flex items-center gap-5 p-5">
            <input type="text" placeholder="🔍 Search..." className="input input-bordered w-full" />
            <button type="submit" className="btn btn-circle btn-md bg-blue-500 rounded-full ">
                <IoMdSearch className="text-xl text-white" />
            </button>
        </form>
    );
};

export default SearchInput;