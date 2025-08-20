import toast from "react-hot-toast";




export const signup = async (payload: { 
    fullName: string; 
    username: string; 
    password: string; 
    confirmPassword: string;
    gender: string;
}) => {
  
    const {fullName, username, password, confirmPassword, gender} = payload;
  
     if (!fullName || !username || !password || !confirmPassword || !gender) {
        toast.error("All fields are required.");
        return false;
    }

    try {
        const res = await fetch('/api/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName,
                username,
                password,
                confirmPassword,
                gender
        })
        });
        const data = res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        toast.error("An error occurred while signing up.");
    }



}
