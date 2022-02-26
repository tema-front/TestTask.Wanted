import { useEffect, useState } from 'react';
import feedbackDatas from '../data/feedback_data.json'

// Отображение комментариев через карусель Bootstrap
export const FeedbacksItem = () => {
    const [feedbacks, setFeedback] = useState([]);
    const [currentNumberFeedbacks, setCurrentNumberFeedbacks] = useState(0);

    useEffect(() => {
        setFeedback(feedbackDatas);
    }, [])

    const nextFeedback = () => {
        setCurrentNumberFeedbacks(currentNumberFeedbacks + 1);
    }

    const pastFeedback = () => {
        setCurrentNumberFeedbacks(currentNumberFeedbacks - 1);
    }

    return (
        <>
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
            <div className="carousel-inner">
                {feedbacks?.map((item, i) => (
                    ((i === 0) ? 
                    <div className="carousel-item active" key={i}>
                        <p className="feedback-txt">“{item?.text}“</p>
                        <div className="feedback-info">
                            <span className="feedback-info-name">{item?.name}</span>
                            <span className="feedback-info-username"><span className='feedback-info-username-comma'>,</span> {item?.instagram_username}</span>
                        </div>
                    </div>
                    :
                    <div className="carousel-item" key={i}>
                        <p className="feedback-txt">“{item?.text}“</p>
                        <div className="feedback-info">
                            <span className="feedback-info-name">{item?.name}</span>
                            <span className="feedback-info-username"><span className='feedback-info-username-comma'>,</span> {item?.instagram_username}</span>
                        </div>
                    </div>
                    )
                ))}
            </div>

            <div className="feedbacks-btns">
                {(currentNumberFeedbacks === 0) ?
                    <button className="disable feedbacks-btns-item" >
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.999999 1.00002L7 7.00002L0.999999 13" stroke="white" strokeLinecap="round"/>
                        </svg>
                    </button>
                    :
                    <a onClick={pastFeedback} className="feedbacks-btns-item" href="#carouselExampleControls" role="button" data-slide="prev">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.999999 1.00002L7 7.00002L0.999999 13" stroke="white" strokeLinecap="round"/>
                        </svg>
                    </a>
                }

                {(currentNumberFeedbacks === feedbacks?.length - 1) ?
                    <button disabled className="disable feedbacks-btns-item">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.999999 1.00002L7 7.00002L0.999999 13" stroke="white" strokeLinecap="round"/>
                        </svg>
                    </button>
                    :
                    <a onClick={nextFeedback} className="feedbacks-btns-item" href="#carouselExampleControls" role="button" data-slide="next">
                        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.999999 1.00002L7 7.00002L0.999999 13" stroke="white" strokeLinecap="round"/>
                        </svg>
                    </a>
                }
            </div>
        </div>
        </>
    )
}