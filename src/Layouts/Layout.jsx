import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";

export default function Layout( {children} ){
    return(
        <>
            <Navbar/>
            <div className="min-h-[90vh] flex items-start justify-center p-4 sm:p-8">
                <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12">
                    {children}
                </div>
            </div>
            <Footer/>
        </>
    );
}