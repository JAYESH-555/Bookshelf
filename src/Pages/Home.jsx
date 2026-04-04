import Logo from 'Assets/Images/BookShelf_Logo.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center gap-20 h-[100vh] bg-base-200">

            <div className="h-64 w-64 rounded-full shadow-lg shadow-primary">
                <img
                    className="w-full h-full rounded-full border-4 border-primary"
                    src={Logo}
                    alt="BookShelf Logo"
                />
            </div>

            <div className="flex justify-around items-center gap-8 text-center">
                <div className="w-2/4 text-center font-semibold basis-1/2">
                    <h1 className="text-warning text-5xl tracking-wider leading-snug font-bold">
                        BookShelf <br />
                        <span className="text-primary">
                            Your personal library and social network for bookworms
                        </span>
                    </h1>
                </div>

                <div className="flex gap-6 mt-4">
                    {/* Register Button */}
                    <Link to="/signup" className="btn btn-primary rounded-md px-4 py-2 btn-wide text-lg shadow-md hover:bg-primary-focus">
                        REGISTER
                    </Link>

                    {/* Login Button */}
                    <Link to="/signin" className="btn btn-warning rounded-md mx-3 px-4 py-2 btn-wide text-lg shadow-md hover:bg-warning-focus">
                        LOGIN
                    </Link>
                </div>

            </div>

        </div>

    );
}