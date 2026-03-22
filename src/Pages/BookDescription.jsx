import BookImage from 'Assets/Images/book.jpg';
import Layout from "Layouts/Layout";
import { useEffect } from 'react';
import { BiUser } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router-dom";
import { addBookToShelf, getAllBookShelves } from 'Redux/Slices/ShelfSlice';


export default function BookDescription() {

    const {state} = useLocation();
    console.log("state", state._id);
    const shelfState = useSelector((state) => state.shelf);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllBookShelves());
    }, []);

    return (
        <Layout>
        {state._id && (
            <div className="my-5 flex items-start justify-center gap-5 flex-col md:flex-row">
                <div className="basis-1/3">
                    <img 
                        className="w-full rounded-lg shadow-md" 
                        src={state.image || BookImage} // Fallback to book.jpg if image is unavailable 
                        alt="Book cover" 
                    />
                </div>
                <div className="flex flex-col items-start justify-center gap-6 p-6 bg-gray-800 rounded-lg shadow-lg w-full md:w-2/3">
                    <h1 className="text-4xl font-bold text-white drop-shadow-lg">{state.title}</h1>
                    
                    <div className="text-yellow-400 text-lg flex items-center gap-2">
                        <BiUser />
                        <span className="bg-green-700 px-2 py-1 rounded-full text-white">{state.author?.name}</span>
                    </div>

                    <p className="text-gray-300 text-lg mt-4 leading-relaxed line-clamp-5">{state.description || "No description available."}</p>

                    <div className="flex flex-wrap gap-2 mt-4">
                        {state.genres.map((genre) => (
                            <span key={genre._id} className="bg-green-700 text-white rounded-full px-3 py-1 text-sm">
                                {genre.name}
                            </span>
                        ))}
                    </div>

                    <div className="text-white text-lg mt-4">
                        <p>Pages: <span className="text-yellow-400">{state.pages}</span></p>
                        <p>Publish Date: <span className="text-yellow-400">{state.publishDate}</span></p>
                    </div>

                    <details className="dropdown w-full">
                        <summary className="m-1 btn btn-primary w-full md:w-auto rounded-lg">Add to Shelf</summary>
                        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-full md:w-52">
                            {shelfState.shelfList.length > 0 && shelfState.shelfList.map((shelf) => (
                                <li
                                    key={shelf._id}
                                    onClick={async () => {
                                        await dispatch(addBookToShelf({ shelfName: shelf.name, bookId: state._id }));
                                        await dispatch(getAllBookShelves());
                                    }}
                                    className="hover:bg-green-600 text-white rounded-lg px-3 py-2 cursor-pointer">
                                    {shelf.name}
                                </li>
                            ))}
                        </ul>
                    </details>
                </div>
            </div>
        )}
        </Layout>
    );
}

