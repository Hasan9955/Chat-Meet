import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="flex flex-col justify-center items-center min-w-96 mx-auto ">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up <span className="text-blue-500">Chat Meet</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Full Name</span>
                        </label>
                        <input type="text" placeholder="Your name" className="w-full input input-bordered h-10 " />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10 " />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="w-full input input-bordered h-10 " />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-white label-text">Confirm Password</span>
                        </label>
                        <input type="text" placeholder="Confirm password" className="w-full input input-bordered h-10 " />
                    </div>
                    <div>
                        <label className="label">
                            <span className="text-white label-text">Gender</span>
                        </label>
                        <div className="form-control flex-row items-center gap-5 text-white">
                            <label className="cursor-pointer label">
                                <span>Male</span>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="male"
                                    className="radio radio-info ml-2"
                                />
                            </label>
                            <label className="cursor-pointer label">
                                <span>Female</span>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="female"
                                    className="radio radio-info ml-2"
                                />
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-block mt-2 btn-sm">Sign up</button>
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