import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useAuth } from '../../Context/useAuth';
import toast from 'react-hot-toast';


const Login = () => {

    const { setAuthUser } = useAuth();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [info, setInfo] = useState({
        username: '',
        password: ''
    });


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(info)
        })

        const data = await res.json();
        if (!res.ok) {
            console.error(data);
            return;
        }
        console.log(data);

        // Set local storage
        setAuthUser(data);

        localStorage.setItem('authUser', JSON.stringify(data));
        toast.success("Login successful");
    }


    return (
        <div className="flex flex-col justify-center items-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-30">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Login <span className="text-blue-500">Chat Meet</span>
                </h1>

                <form onSubmit={handleLogin}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text text-white">Username</span>
                        </label>
                        <input type="text" placeholder="Enter username" className="w-full input input-bordered h-10" onChange={(e) => setInfo({ ...info, username: e.target.value })} required />
                    </div>

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
                                value={info.password}
                                onChange={(e) => {
                                    setInfo({ ...info, password: e.target.value })
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