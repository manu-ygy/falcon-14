import React from 'react'
import FeedCarousel from '../feed-carousel'
import ArticleSection from './articles-section'

const WelcomeSection = () => {
    return (
        <div className="min-h-svh bg-white rounded-[3.5rem] md:p-16 p-4 mx-auto flex flex-col items-center justify-center gap-4">
            <div className="rounded-[3.5rem] mx-auto flex flex-col gap-4">
                <div className="rounded-[3.5rem] p-8">
                    <h2 className="text-5xl font-black p-4 text-center mx-auto">Selamat Datang di YOSUKA <span className="blog-title-emoji ml-2">👋</span></h2>
                    <h2 className="text-xl font-normal max-w-screen-lg mx-auto text-center">
                        Kami berkomitmen membentuk pribadi pembelajar yang cerdas dan berbudi pekerti luhur melalui pendidikan visioner yang berlandaskan nilai-nilai Kristiani dan kemanusiaan universal. Kami percaya dalam mengembangkan individu secara menyeluruh, bukan hanya cerdas secara akademis, tetapi juga berkomitmen untuk memperjuangkan dan menjaga martabat setiap manusia.</h2>
                </div>
            </div>
            <div className="flex flex-row h-full w-full flex-1 gap-4 items-stretch justify-stretch">
                <FeedCarousel />
                <div className="bg-neutral-300 w-1/3 h-auto rounded-[3rem]"></div>
            </div>
            <ArticleSection />
        </div>
    )
}

export default WelcomeSection