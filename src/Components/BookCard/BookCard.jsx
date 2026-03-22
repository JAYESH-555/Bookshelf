import BookImage from 'Assets/Images/book.jpg';
import { BiUser } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function BookCard({ data }) {
    const navigate = useNavigate();

    return (
        <div className="rounded-lg shadow-2xl w-full flex p-6 bg-gray-800 text-white mt-4 mb-4 max-md:flex-col max-md:items-center">
            <img
                src={data.image || BookImage} // Use data.image if available, otherwise fall back to BookImage
                alt="Book cover"
                className="object-cover rounded-md"
                width="200px"
                height="300px"
            />
            <div className="p-6 md:flex-grow">
                
                <h3 className="mb-3 text-lg font-bold line-clamp-2 md:text-2xl">{data.title}</h3>

                
                <p className="text-sm md:text-base text-gray-300 line-clamp-3 mb-4">
                    {data.description || "No description available."}
                </p>

                
                <div className="flex items-center justify-between gap-4 mt-6">
                    <div className="flex items-center gap-2 text-sm md:text-base">
                        <BiUser className="text-lg" />
                        <span className="font-medium text-lg">{data.author?.name || "Unknown Author"}</span>
                    </div>
                    <button
                        onClick={() => navigate("/book/description", { state: { ...data } })}
                        className="btn btn-primary text-sm md:text-base py-2 px-4">
                        More Details
                    </button>
                </div>
            </div>
        </div>
    );
}
