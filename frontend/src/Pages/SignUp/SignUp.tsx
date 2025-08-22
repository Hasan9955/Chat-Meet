import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import useSignup from '../../hooks/useSignup';



const SignUp = () => {

    const [error, setError] = useState<boolean>(false);
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
    const { loading, signup } = useSignup();


    const [input, setInput] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: ''
    })



    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        await signup(input);

    }
    return (
        <div className="flex flex-col justify-center items-center min-w-96 mx-auto ">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-500">Chat Meet</span>
                </h1>
                <form onSubmit={handleSignUp}>
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Your name" className="w-full input input-bordered h-10 " value={input.fullName} onChange={(e) => setInput({ ...input, fullName: e.target.value })} required />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10 " value={input.username} onChange={(e) => setInput({ ...input, username: e.target.value })} required />
                    </div>
                    {/* Password */}
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Password"
                                required
                                className="w-full input input-bordered h-12 rounded-xl pr-10"
                                value={input.password}
                                onChange={(e) => {
                                    setInput({ ...input, password: e.target.value })
                                    setPasswordError(input.password.length < 5 ? true : false)
                                }
                                }
                            />
                            <span
                                className="absolute right-3 top-4 cursor-pointer text-gray-400 text-lg"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {passwordError && (
                            <p className="text-red-400 mt-2 text-sm">
                                Password must be at least 6 character
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Confirm Password</span>
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                required
                                placeholder="Confirm password"
                                className="w-full input input-bordered h-12 rounded-xl pr-10"
                                value={input.confirmPassword}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setInput({ ...input, confirmPassword: value });
                                    setError(input.password !== value);
                                }}
                            />
                            <span
                                className="absolute right-3 top-4 cursor-pointer text-gray-400 text-lg"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaEye /> : <FaEyeSlash />}
                            </span>
                        </div>
                        {error && (
                            <p className="text-red-400 mt-2 text-sm">
                                Passwords do not match
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-white label-text -mb-2">Gender</span>
                        </label>
                        <div className="form-control flex-row items-center gap-5 text-white">
                            <label className="cursor-pointer label">
                                <span>Male</span>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="radio radio-info ml-2"
                                    onChange={() => setInput({ ...input, gender: "male" })}
                                    required={input.gender === ''}
                                />
                            </label>
                            <label className="cursor-pointer label">
                                <span>Female</span>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="radio radio-info ml-2"
                                    onChange={() => setInput({ ...input, gender: "female" })}
                                    required={input.gender === ''}
                                />
                            </label>
                        </div>
                    </div>
                    <div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading}>
							{loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
						</button>
					</div>
                </form>

                <p className="mt-2 text-white">Already have an account?
                    <Link to="/login" className="text-blue-500 font-bold hover:underline"> Login</Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;