import React from 'react'
import FeedCarousel from '../feed-carousel'
import ArticleSection from './articles-section'

const WelcomeSection = () => {
    return (
        <div className="min-h-svh bg-white rounded-[3.5rem] md:p-16 p-4 mx-auto flex flex-col items-center justify-center gap-4">
            <div className="flex flex-row h-full w-full flex-1 gap-4 items-stretch justify-stretch">
                <FeedCarousel />
                <div className="bg-neutral-300 w-1/3 h-auto rounded-[3rem]"></div>
            </div>
            <ArticleSection />
        </div>
    )
}

export default WelcomeSection