import { useState } from "react"
import { Feedbacks } from "../Feedbacks"
import { Innovations } from "../Innovations"
import otherInnovation from '../../data/blog_posts.json'

export const Main = () => {
    const [moreInnovation, setMoreInnovation] = useState(false);

    const showMoreFeedback = () => {
        setMoreInnovation(true);
    }

    return (
        <>
        <main className="content-wrp">
            <div className="content">
                <Feedbacks />
                {moreInnovation ? 
                    <Innovations moreInnovation={otherInnovation} /> 
                    : 
                    <>
                    <Innovations />
                    <button onClick={showMoreFeedback} className="content-more">
                        Read more
                        <svg className="content-more-tick" width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M13 1L7 7L1 1" stroke="#6527D9" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                    </>
                }
            </div>
        </main>
        </>
    )
}