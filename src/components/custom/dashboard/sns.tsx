'use client'

import { ChatCenteredDots, Heart } from "@phosphor-icons/react/dist/ssr"

const SNSItem = () => {
    const nameList = [
        "Dimas Pratama",
        "Rina Sari",
        "Budi Santoso",
        "Lia Anjani",
        "Arief Kurniawan",
        "Maya Putri",
        "Eko Wijaya",
        "Sinta Amalia",
        "Rendy Maulana",
        "Fitriani Lestari"
    ]

    const placeList = [
        "Ushuaia, Tierra del Fuego",
        "Reykjavik, Capital Region",
        "Bora Bora, French Polynesia",
        "Siem Reap, Angkor",
        "Queenstown, Otago",
        "Cape Town, Western Cape",
        "Sapporo, Hokkaido",
        "Santorini, Cyclades",
        "Dubrovnik, Dalmatia",
        "Marrakesh, Marrakesh-Safi"
    ]

    const imageList = [
        'https://cdn.britannica.com/37/136637-050-779246CE/harbour-Ushuaia-province-Tierra-del-Fuego-Argentina.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP_8MlFAyOlyouxLVgK5yFluWOTZ8zhODxLw&s',
        'https://a.travel-assets.com/findyours-php/viewfinder/images/res70/230000/230324-Society-Islands.jpg?impolicy=fcrop&w=1040&h=580&q=mediumHigh',
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/48/5f/80/bayon-temple.jpg?w=1400&h=1400&s=1',
        'https://www.tripadvisor.co.id/Tourism-g255122-Queenstown_Otago_Region_South_Island-Vacations.html',
        'https://a0.muscache.com/im/pictures/INTERNAL/INTERNAL-ImageByPlaceId-ChIJ1-4miA9QzB0Rh6ooKPzhf2g-large_background/original/24f948ca-81eb-4c42-9098-4f72e2df6611.jpeg',
        'https://travel.rakuten.com/contents/sites/contents/files/styles/max_1300x1300/public/2024-03/sapporo-area-guide_9.jpg?itok=zE5_ciqF',
        'https://www.johansens.com/wp-content/uploads/2024/02/Greece-Iconic-Santorini-4-e1718110787901.jpg',
        'https://lp-cms-production.imgix.net/features/2018/07/Croatia_Dubrovnik-56fd6323f9d1.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3mQruWHaTJsLWqUUmI2utxSgbzpPNGfrA3Q&s'
    ]

    const randomPerson = Math.floor(Math.random() * nameList.length)
    const randomPlace = Math.floor(Math.random() * imageList.length)

    return (
        <div className = "flex flex-col rounded-3xl relative gap-4">
        <div className = "flex gap-4 items-center ml-4">
            <img className = "w-16 h-16 rounded-full border border-slate-400/50" src = "https://i.pinimg.com/474x/68/b1/35/68b13553903740a875342bfa4518b228.jpg"></img>

            <div className = "z-20 flex flex-col -gap-1">
                <span className = "font-semibold">{nameList[randomPerson]}</span>
                <span className = "text-sm opacity-70">di {placeList[randomPlace]}</span>
            </div>
        </div>

        <img className = "rounded-3xl z-10 w-full" src = {imageList[randomPlace]}></img>

        <div className = "z-20 px-4 py-2.5 flex gap-2.5 items-center">
            <Heart size={24}/>
            <span className='font-medium'>{Math.round(Math.random() * 999)}</span>
                
            <ChatCenteredDots size={24}/>
            <span className='font-medium mr-4'>{Math.round(Math.random() * 999)}</span>

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