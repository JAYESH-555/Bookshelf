import Layout from "Layouts/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "Redux/Slices/AuthSlice";

export default function SignIn() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const state = useSelector((state) => state.auth);

    const [signInDetails, setSignInDetails] = useState({
        email: '',
        password: '',
    });

    function handleFormChange(e) {
        const { name, value } = e.target;
        setSignInDetails({
            ...signInDetails,
            [name]: value
        });
    }

    function resetForm() {
        setSignInDetails({
            email: '',
            password: '',
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        console.log(signInDetails);
        const response = await dispatch(signIn(signInDetails));
        if (response?.payload?.data) {
            navigate("/dashboard");
        }
        resetForm();
    }

    useEffect(() => {
        if(state.isLoggedIn){
            navigate("/dashboard");
        }
    }, []);

    return (
        <Layout>
            <div className="h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold">Login to Your Account</h1>
                    <p className="mt-2">
                        Don’t have an account? 
                        <Link to="/signup" className="ml-2 text-yellow-500 hover:text-yellow-400 underline">
                            Sign Up
                        </Link>
                    </p>
                </div>

                <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
                    <form onSubmit={onFormSubmit} className="flex flex-col space-y-6">
                        <div className="w-full">
                            <input
                                type="email"
                                placeholder="Email..."
                                name="email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onChange={handleFormChange}
                                value={signInDetails.email}
                                aria-label="Email"
                            />
                        </div>
                        <div className="w-full">
                            <input
                                type="password"
                                placeholder="Password..."
                                name="password"
                                className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                                onChange={handleFormChange}
                                value={signInDetails.password}
                                aria-label="Password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded-lg bg-yellow-500 text-gray-900 font-semibold hover:bg-yellow-400 transition duration-300 focus:ring-4 focus:ring-yellow-300"
                            aria-label="Submit"
                        >
                            SIGN IN
                        </button>
                    </form>
                </div>
            </div>
        </Layout>
    );
}

