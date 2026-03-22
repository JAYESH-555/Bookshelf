import BookImage from "Assets/Images/book.jpg";
import Layout from "Layouts/Layout";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createShelf, getAllBookShelves } from "Redux/Slices/ShelfSlice";


export default function Shelves() {

    const shelfState = useSelector((state) => state.shelf);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [activeShelf, setActiveShelf] = useState(null);
    const [books, setBooks] = useState([]);
    const [shelfInput, setShelfInput] = useState("");

    async function loadShelves() {
        if (shelfState.shelfList.length == 0) {
            const response = await dispatch(getAllBookShelves());
            if (response?.payload?.data?.data?.length > 0) {
                setBooks(response?.payload?.data?.data[0].books);
                setActiveShelf(response?.payload?.data?.data[0]._id);
            }
        } else if (shelfState.shelfList.length > 0) {
            setBooks(shelfState.shelfList[0].books);
            setActiveShelf(shelfState.shelfList[0]._id);
        }
    }

    function changeActiveShelf(id) {
        setActiveShelf(id);
        shelfState.shelfList.forEach(shelf => {
            if (shelf._id == id) {
                setBooks(shelf.books);
            }
        });
    }

    useEffect(() => {
        loadShelves();
    }, []);

    return (
        <Layout>
            <div className="flex flex-col md:flex-row gap-12">
                
                {/* Shelves List */}
                <div className="flex flex-col items-start gap-5 w-full md:w-1/4">
                    {shelfState.shelfList.map((shelf) => (
                        <button
                            key={shelf._id}
                            onClick={() => changeActiveShelf(shelf._id)}
                            className={`${activeShelf === shelf._id ? "bg-teal-700 text-white shadow-lg" : "bg-gray-700 text-white"} text-lg font-semibold py-2 px-4 w-full rounded-lg transition ease-in-out duration-300 hover:bg-gray-600`}
                        >
                            {shelf.name}
                        </button>
                    ))}
                    
                    <div className="w-full mt-6">
                        <input
                            className="w-full p-3 text-white rounded-lg border-2 border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-600 mb-3"
                            placeholder="New shelf name"
                            value={shelfInput}
                            onChange={(e) => setShelfInput(e.target.value)}
                        />
                        <button
                            onClick={async () => {
                                if (!shelfInput) return;
                                await dispatch(createShelf({ shelfName: shelfInput }));
                                await dispatch(getAllBookShelves());
                                setShelfInput("");
                            }}
                            className="w-full bg-teal-600 text-white py-2 rounded-lg font-semibold hover:bg-teal-700 transition"
                        >
                            Create New Shelf
                        </button>
                    </div>
                </div>

                {/* Books Table */}
                <div className="overflow-x-auto w-full md:w-3/4 bg-gray-800 p-6 rounded-lg shadow-md">
                    {books.length > 0 ? (
                        <table className="w-full text-white">
                            <thead>
                                <tr className="text-left text-lg bg-teal-700">
                                    <th className="p-3">Title</th>
                                    <th className="p-3">Rating</th>
                                    <th className="p-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {books.map(book => (
                                    <tr
                                        key={book._id}
                                        className="hover:bg-gray-600 cursor-pointer transition duration-300"
                                        onClick={() => navigate("/book/description", { state: { ...book } })}
                                    >
                                        <td className="p-3">
                                            <div className="flex items-center gap-4">
                                                <img className="w-12 h-12 rounded-full shadow-md" src={BookImage} alt="Book cover" />
                                                <span className="font-semibold text-lg">{book.title}</span>
                                            </div>
                                        </td>
                                        <td className="p-3 text-center">★ 5</td>
                                        <td className="p-3 text-right">
                                            <button className="bg-teal-500 text-white py-1 px-3 rounded-lg hover:bg-gray-700 transition duration-300">
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <div className="text-gray-400 text-center py-10">No books found in this shelf.</div>
                    )}
                </div>
            </div>
        </Layout>
    );
}