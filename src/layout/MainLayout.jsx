import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
    return (
        <div className="poppins-font min-h-screen text-cyan-800 bg-[#F7F4EF]">
            <nav className=" ">
                <Navbar></Navbar>
            </nav>
            <ToastContainer></ToastContainer>
            <main className="min-h-[calc(100vh-292px)]">
                <Outlet></Outlet>
            </main>
            <section className="bg-[#141414]">
                <Footer></Footer>

            </section>
        </div>
    );
};

export default MainLayout;