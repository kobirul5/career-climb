import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import CommentsCard from '../components/CommentsCard';
import Modal from '../components/Modal';

const ServiceDetails = () => {
    const {user} = useContext(AuthContext)
    const singleData = useLoaderData()
    const [ comments, setComment ] = useState([])
    const [commentArea, setCommentArea] = useState("")
    const [disable, setDisable] = useState(true)
    useEffect(()=>{
        if(commentArea){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
        document.title="Service Details || CareerClimb"
    },[commentArea, setDisable])

    
    const userName = user?.displayName

    const { id, serviceName, category, rating, pricing, counselor, description, image } = singleData
    const handleComment = (e) => {
        e.preventDefault()
        const msg = e.target.massage.value
        const newData = [...comments]
        const createObj = {
            name: userName,
            feedBack: msg
        }
         newData.push(createObj)
        setComment(newData)
    }


    return (
        <div>
            <div className="hero  container mx-auto my-10 px-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-[90%] border p-5 md:p-10 rounded-2xl ">
                    <img
                        src={image}
                        className=" w-full rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-2xl md:text-4xl  font-bold">{serviceName}</h1>
                        <p className="py-1 pt-3 font-bold">Counselor Name: {counselor}</p>
                        <p className="py-1"><span className='font-bold'>Description:</span> {description} </p>
                        <p className='font-semibold'>Category:- {category}</p>
                        <p className="py-1">Price: {pricing} </p>
                        <p className="py-1 text-2xl md:text-3xl font-bold">Rating: {rating} </p>
                        <button onClick={() => document.getElementById('my_modal_3').showModal()} className='btn bg-cyan-800 mt-2 text-white'>Talk With Our Expert </button>
                        <form className='mt-5 space-y-3' onSubmit={handleComment}>
                            <textarea onChange={(e)=>setCommentArea(e.target.value)} name='massage' className="textarea w-full textarea-bordered" placeholder="comment"></textarea>
                            <button disabled={disable} className='btn border-cyan-700 bg-white'>Comment</button>
                        </form>
                    </div>
                </div>
            </div>
                <Modal></Modal>
            <div className='container mx-auto text-center my-10'>
                <h1 className='text-5xl font-bold'>FeedBack Our Clients</h1>
                <div className='text-left p-10 md:w-[70%] flex flex-col gap-5 mx-auto'>
                    {
                        comments?.map((comm, idx)=><CommentsCard
                            key={idx}
                            comm={comm}
                        ></CommentsCard>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;