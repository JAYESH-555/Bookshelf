import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "Redux/Slices/AuthSlice";

export default function Navbar() {

    const authState = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    function onLogout() {
        localStorage.clear();
        dispatch(logout());
        toast.success("Logged out successfully!");
    }

    return (
        <div className="navbar bg-gray-800 px-20 shadow-md">
            <div className="flex-1">
                <Link
                    to="/dashboard"
                    className="text-yellow-500 text-3xl font-bold tracking-wider hover:text-yellow-400 transition duration-300"
                >
                    BookShelf
                </Link>
            </div>

            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 space-x-6">
                    {!authState.isLoggedIn && (
                        <li>
                            <Link to="/" className="text-gray-300 text-lg hover:text-yellow-400 transition duration-300">
                                Home
                            </Link>
                        </li>
                    )}
                    {authState.isLoggedIn && (
                        <>
                            <li>
                                <Link to="/shelves" className="text-gray-300 text-lg hover:text-yellow-400 transition duration-300">
                                    Shelves
                                </Link>
                            </li>
                            <li>
                                <Link to="/dashboard" className="text-gray-300 text-lg hover:text-yellow-400 transition duration-300">
                                    {authState.username}
                                </Link>
                            </li>
                        </>
                    )}
                    <li>
                        <details>
                            <summary className="text-gray-300 text-lg hover:text-yellow-400 transition duration-300 cursor-pointer">
                                Account
                            </summary>
                            <ul className="p-2 bg-gray-700 rounded-lg shadow-lg text-gray-300">
                                {authState.isLoggedIn ? (
                                    <li>
                                        <Link to="/signin" onClick={onLogout} className="hover:text-yellow-400 transition duration-300 text-lg">
                                            Logout
                                        </Link>
                                    </li>
                                ) : (
                                    <>
                                        <li>
                                            <Link to="/signin" className="hover:text-yellow-400 transition duration-300 text-lg">
                                                Sign In
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/signup" className="hover:text-yellow-400 transition duration-300 text-lg">
                                                Sign Up
                                            </Link>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    );
}