import MessageContainer from "../../Components/MessageContainer/MessageContainer";
import Sidebar from "../../Components/Sidebar/Sidebar";

const Home = () => {
    return (
        <div className="flex sm:h-[] md:h-[] rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
            <Sidebar />
            <MessageContainer />
        </div>
    );
};

export default Home;