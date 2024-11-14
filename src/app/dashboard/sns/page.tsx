'use client';

import React from 'react';
import {
  ChatCenteredDots,
  Heart
} from '@phosphor-icons/react/dist/ssr';
import dynamic from 'next/dynamic';

const SNSItem = dynamic(() => import('@/components/custom/dashboard/sns'), {ssr: false});

const SNSChunk = () => {
  return (
    <div className = "grid lg:grid-cols-2 gap-6">
      <div className = "flex flex-col gap-6">
        <div className = "flex gap-4">
          <a href = "" className = "w-full">
            <img src = "https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk=" className = "w-full h-32 rounded-3xl object-cover"/>
          </a>

          <a href = "" className = "w-full">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_2oII-AssPFNOvcLQ6ecJ6ZWQlUbKU3j8w&s" className = "w-full h-32 rounded-3xl object-cover"/>
          </a>
        </div>

        <SNSItem/>
      </div>

      <div className = "flex flex-col gap-6">
        <SNSItem/>

        <div className = "flex gap-4">
          <a href = "" className = "w-full">
            <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSZS1e0nTDhp3WWnJ8t2BzutaCVko3ulDSJw&s" className = "w-full h-32 rounded-3xl object-cover"/>
          </a>
        </div>
      </div>
    </div>
  )
}

const SNSPage = () => {
    return (
      <div className = "w-full h-full flex flex-col gap-6">
        <div className = "lg:grid lg:grid-cols-4 gap-6">
          <div className = "flex flex-col h-64 bg-zinc-900 rounded-3xl relative overflow-hidden col-span-4">
              <div className = "absolute w-full h-full top-o left-0 bg-gradient-to-r from-qmaroon-500 to-qmaroon-400 opacity-70 rounded-3xl"></div>
              <img className = "absolute w-full h-full object-cover top-o left-0 rounded-3xl opacity-60 group-hover:opacity-100 scale-100 group-hover:scale-125 transition duration-500" src = "https://media.istockphoto.com/id/513820150/photo/idyllic-landscape-in-the-alps-with-green-meadows-and-flowers.jpg?s=612x612&w=0&k=20&c=hJT6SYkv8c_czzS9UA7UITYgeSCmSDjSfjQC7w8zVL4="/>
              <div className = "absolute bottom-8 left-8 flex flex-col text-slate-200 gap-1 opacity-100 group-hover:opacity-0">
                  <h1 className = "text-3xl font-semibold">Cari inspirasi liburanmu!</h1>
                  <span className = "text-sm opacity-70 font-medium">Jangan lewatkan petualangan keren teman-temanmu!</span>
              </div>
          </div>
        </div>

        <div className="w-full h-full bg-white rounded-3xl p-4 lg:p-8 flex flex-col gap-6">
          <SNSChunk/>
          <SNSChunk/>
          <SNSChunk/>
        </div>
      </div>
    );
};


export default SNSPage;
