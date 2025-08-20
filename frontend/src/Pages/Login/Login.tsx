import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login <span className="text-blue-500">Chat Meet</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10 " />
                    </div>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="w-full input input-bordered h-10 " />
                    </div>
                    
                    <div>
                        <button className="btn btn-block mt-6 btn-sm">Login now</button>
                    </div>
                    <p className="mt-2 text-white">Don't have an account? 
                        <Link to={'/signup'} className="text-blue-500 font-bold hover:underline" > Sing Up</Link>
                        </p>
                </form>
            </div>
        </div>
    );
};

export default Login;