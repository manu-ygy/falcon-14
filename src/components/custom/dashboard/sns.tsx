import { ChatCenteredDots, Heart } from "@phosphor-icons/react/dist/ssr"

const SNSItem = () => {
    return (
        <div className = "flex flex-col rounded-3xl relative gap-4">
        <div className = "flex gap-4 items-center ml-4">
            <img className = "w-16 h-16 rounded-full border border-slate-400/50" src = "https://i.pinimg.com/474x/68/b1/35/68b13553903740a875342bfa4518b228.jpg"></img>

            <div className = "z-20 flex flex-col -gap-1">
                <span className = "font-semibold">Lindawati Suparman</span>
                <span className = "text-sm opacity-70">at Labuan Bajo, Manggarai</span>
            </div>
        </div>

        <img className = "rounded-3xl z-10" src = "https://linebank.co.id/blog/wp-content/uploads/2022/12/5_shutterstock_1041475570-1-jpg-webp.webp"></img>

        <div className = "z-20 px-4 py-2.5 flex gap-2.5 items-center">
            <ChatCenteredDots size={24}/>
            <span className='font-medium mr-4'>50</span>

            <Heart size={24}/>
            <span className='font-medium'>1.2k</span>

            <div className = "flex ml-auto gap-2">
                <button className = "w-4 h-4 rounded-full border border-slate-400/50"></button>
                <button className = "w-4 h-4 rounded-full border bg-qmaroon-500"></button>
                <button className = "w-4 h-4 rounded-full border border-slate-400/50"></button>
                <button className = "w-4 h-4 rounded-full border border-slate-400/50"></button>
                <button className = "w-4 h-4 rounded-full border border-slate-400/50"></button>
            </div>
        </div>
    </div>
    )
}

export default SNSItem;