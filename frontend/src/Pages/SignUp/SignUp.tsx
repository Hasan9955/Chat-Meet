import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useState } from "react";
import useSignUp from "../../Hooks/useSignUp";


const SignUp = () => {

    const {signUp, loading} = useSignUp()
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: ""
    })


    const handleCheckboxChange = (gender: string) => {
        setInputs({...inputs, gender})
    } 


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSubmit = async(e: any) => {
        e.preventDefault();
        await signUp(inputs)
    }

    return (
        <div className="flex flex-col justify-center items-center min-w-96 mx-auto text-white">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-500">Chat Meet</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Full Name</span>
                        </label>
                        <input type="text" 
                        placeholder="Your name" 
                        className="w-full input input-bordered h-10 " 
                        value={inputs.fullName}
                        onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Username</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Enter username" 
                        className="w-full input input-bordered h-10 " 
                        value={inputs.username}
                        onChange={(e) => setInputs({...inputs, username: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Password</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="password" 
                        className="w-full input input-bordered h-10 "
                        value={inputs.password}
                        onChange={(e) => setInputs({...inputs, password: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Confirm Password</span>
                        </label>
                        <input 
                        type="text" 
                        placeholder="Confirm password" 
                        className="w-full input input-bordered h-10 "
                        value={inputs.confirmPassword}
                        onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
                        />
                    </div>
                    <GenderCheckBox
                        onCheckboxChange={handleCheckboxChange}
                        selectedGender={inputs.gender}
                    />
                    <p className="mt-2">Already have an account?
                        <Link className="text-blue-500 font-bold hover:underline" to="/login">Login</Link>
                    </p>
                    <div>
                        {
                            loading ? <div className="flex justify-center ">
                                <span className="loading loading-bars loading-md"></span>
                            </div> : <button type="submit" className="btn btn-block mt-2 btn-sm">Sign up</button> 
                        }
                        

                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;