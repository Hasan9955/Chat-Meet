import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2"

interface signUpProps {
    fullName: string,
    username: string,
    password: string,
    confirmPassword: string,
    gender: string
}

const useSignUp = () => {
    const [loading, setLoading] = useState(false)


    const signUp = async ({ fullName, username, password, confirmPassword, gender }: signUpProps) => {
        const success = handleInputErrors({ fullName, username, password, confirmPassword, gender })
        if (!success) return;

        setLoading(true)
        try {
            const res = await axios.post('http://localhost:8000/api/auth/signUp', {
                fullName, username, password, confirmPassword, gender
            })
            console.log(res.data)
            if(res.data){
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }



            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            toast.error(error.message)
        } finally {
            setLoading(false)
        }

    }

    return { loading, signUp }
};

export default useSignUp;

function handleInputErrors({ fullName, username, password, confirmPassword, gender }: signUpProps) {
    if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("please fill in all fields")
        return false
    }

    if (password !== confirmPassword) {
        toast.error("Password do not match.")
        return false
    }

    if (password.length < 6) {
        toast.error("Password must be 6 character")
        return false
    }

    return true;

}