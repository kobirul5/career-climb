import { useEffect, useState } from "react";
import StoryCard from "./StoryCard";

const SuccessStory = () => {
    const [story, setStory] = useState([])

    useEffect(() => {
        fetch('./successStory.json')
            .then(res => res.json())
            .then(data => setStory(data))
    }, [])
    return (
        <div className="my-10">
            <div className="mx-auto flex flex-col justify-center items-center text-center max-w-xl">
                <h1 className="text-5xl font-bold">Success Story</h1>
                <p className="py-6">
                    Real Stories, Real Success: How We’ve Helped Individuals Achieve Their Career Dreams
                </p>
            </div>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {
                    story?.map(s => <StoryCard
                        key={s.id}
                        s={s}
                    ></StoryCard>)
                }
            </section>

        </div>
    );
};

export default SuccessStory;