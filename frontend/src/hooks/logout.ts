import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "../Context/useAuth";


const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuth();

    const logout = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.removeItem("chat-user");
            setAuthUser(null);
            toast.success("Logged out successfully");
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    return { loading, logout };
};
export default useLogout;