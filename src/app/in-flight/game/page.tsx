'use client';

import { Button } from "@/components/ui/button";
const GamePage = () => {
    return (
        <div className = "w-full h-full relative p-4 flex flex-col gap-4">
            <div className = "flex gap-2 items-center">
                <a className = "text-xs font-semibold bg-slate-100 py-2 px-4 w-fit rounded-3xl" href = "/in-flight">Kembali</a>
            </div>

            <h2 className = "text-2xl font-semibold text-qmaroon-500">Permainan</h2>

            <div className = "w-full h-full p-4 bg-slate-100 rounded-3xl">
                <div className = "grid grid-cols-2 gap-4 items-start">
                    <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
                        <img className = "min-w-24 h-24 rounded-3xl bg-gradient-to-b from-yellow-400 to-yellow-300" src = "https://static.vecteezy.com/system/resources/thumbnails/030/953/079/small_2x/ramen-3d-icon-png.png"/>
                        <span>Masak <br/>Ramen!</span>
                    </Button>

                    <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
                        <img className = "min-w-24 h-24 p-4 rounded-3xl bg-gradient-to-b from-blue-400 to-blue-300" src = "https://cdn3d.iconscout.com/3d/premium/thumb/question-mark-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--confusion-faq-ask-essential-interface-element-pack-user-illustrations-4347244.png?f=webp"/>
                        <span>Trivia</span>
                    </Button>
                    
                    <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
                        <img className = "min-w-24 p-4 bg-gradient-to-b from-green-400 to-green-300 h-24 rounded-3xl" src = "https://cdn3d.iconscout.com/3d/premium/thumb/dango-3d-icon-download-in-png-blend-fbx-gltf-file-formats--delicious-logo-japanese-food-asian-pack-culture-religion-festivals-icons-8436642.png?f=webp"/>
                        <span>Dango <br/>Match</span>
                    </Button>

                    <Button className = "flex flex-col p-0 gap-2" variant={'ghost'}>
                        <img className = "min-w-24 h-24 rounded-3xl bg-gradient-to-b from-red-400 to-red-300" src = "https://cdn3d.iconscout.com/3d/premium/thumb/samurai-helmet-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--hat-weapon-costume-japanese-culture-pack-religion-festivals-illustrations-4241175.png"/>
                        <span>Perang <br/>Samurai</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default GamePage;
