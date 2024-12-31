import { useContext, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Banner from "../components/Banner";
import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import SuccessStory from "../components/SuccessStory";
import Blogs from "../components/Blogs";
import ContactUs from "../components/ContactUs";
import CardBanner from "../components/CardBanner";
// import { Helmet } from "react-helmet";

const Home = () => {
    useEffect(()=>{
        document.title = "Home || CareerClimb"
    },[])
    const { loading } = useContext(AuthContext)
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            {/* <Helmet><title>Home || CareerClimb </title></Helmet> */}
            <section className="container mx-auto px-5 md:px-10 my-10">
                <CardBanner></CardBanner>
                <div className="bg-white p-5 rounded-3xl">
                    <Banner></Banner>
                </div>
                <Outlet></Outlet>
                <SuccessStory></SuccessStory>
            </section>
            <section className="mx-auto bg-cyan-800 text-white">
                <ContactUs></ContactUs>
            </section>
            <section className="container mx-auto px-5 md:px-10 my-10">

                <Blogs></Blogs>
            </section>
        </div>
    );
};

export default Home;