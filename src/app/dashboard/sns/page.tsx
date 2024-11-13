import React from 'react';
import {
  ChatCenteredDots,
  Heart
} from '@phosphor-icons/react/dist/ssr';

const SNSPage = () => {
    return (
        <div className="w-full h-full bg-white rounded-3xl p-8 flex flex-col gap-6">
          <div className = "grid grid-cols-4 gap-6">
            <div className = "flex flex-col h-64 bg-zinc-900 rounded-3xl relative group overflow-hidden col-span-3">
                <div className = "absolute w-full h-full top-o left-0 bg-gradient-to-r from-qmaroon-500 to-qmaroon-400 opacity-70 rounded-3xl"></div>
                <img className = "absolute w-full h-full object-cover top-o left-0 rounded-3xl opacity-60 group-hover:opacity-100 scale-100 group-hover:scale-125 transition duration-500" src = "https://deih43ym53wif.cloudfront.net/Bora-Bora-French-Polynesia-shutterstock_1400768336.jpg_3eb9ccf93e.jpg"/>
                <div className = "absolute bottom-8 left-8 flex flex-col text-slate-200 gap-1 opacity-100 group-hover:opacity-0">
                    <h1 className = "text-3xl font-semibold">Cari inspirasi liburanmu!</h1>
                    <span className = "text-sm opacity-70 font-medium">Lorem ipsum dolor sit, re dolores unde quas quia distinctio?</span>
                </div>
            </div>

            <div className = "w-full h-full bg-gradient-to-b from-qmaroon-600 to-qmaroon-400 rounded-3xl">

            </div>
          </div>

          <div className = "grid grid-cols-2 gap-6">
            <div className = "flex flex-col gap-6">
              <div className = "flex gap-4">
                <a href = "" className = "w-full">
                  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZS1e0nTDhp3WWnJ8t2BzutaCVko3ulDSJw&s" className = "w-full h-32 rounded-3xl object-cover"/>
                </a>

                <a href = "" className = "w-full">
                  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZS1e0nTDhp3WWnJ8t2BzutaCVko3ulDSJw&s" className = "w-full h-32 rounded-3xl object-cover"/>
                </a>
              </div>

              <div className = "flex flex-col relative gap-4">
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
            </div>

            <div className = "flex flex-col gap-6">
              <div className = "flex flex-col relative gap-4">
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

              <div className = "flex gap-4">
                <a href = "" className = "w-full">
                  <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZS1e0nTDhp3WWnJ8t2BzutaCVko3ulDSJw&s" className = "w-full h-32 rounded-3xl object-cover"/>
                </a>
              </div>
            </div>
          </div>
        </div>
    );
};

export default SNSPage;
