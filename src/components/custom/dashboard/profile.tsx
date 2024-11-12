'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useSession } from 'next-auth/react';
import { SignOut, Dot, User, Gear } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/components/ui/button';

// Definisikan tipe untuk User
interface UserType {
    name: string;
    image?: string;
    accountType: 'guest' | 'student' | 'administrator'; // Sesuaikan tipe ini dengan nilai yang mungkin ada
    userGroups: Array<string>;
}

const Profile = () => {
    const { data } = useSession({
        required: true
    });

    // Gunakan tipe yang telah didefinisikan untuk user
    const user = data?.user as UserType;

    return (
        <>
            <div className = "flex items-center">
                <h1 className = "text-3xl font-semibold text-qmaroon-500">Profil</h1>
                <div className="flex lg:ml-auto gap-4">
                    <Button variant={'ghost'} className = "px-0 hover:bg-transparent hover:text-zinc-900">
                        <Gear size={24}/>
                    </Button>

                    <Button variant={'ghost'} className="text-red-500 p-0 hover:bg-transparent hover:text-red-600">
                        <SignOut size={24}/>
                    </Button>
                </div>
            </div>

            <div className="w-full h-fit flex gap-6 items-center rounded-3xl max-md:flex-col max-md:text-center bg-white text-zinc-900 border border-slate-400/50 p-4">        
                {!user ? (
                    <>

                    </>
                ) : (
                    <>
                        <Avatar className="w-20 h-20 border">
                            <AvatarImage src={user.image ? user.image : '/images/default.png'} />
                            <AvatarFallback>
                                <User size="32" />
                            </AvatarFallback>
                        </Avatar>

                        <div className="flex flex-col gap-2">
                            <h2 className="text-xl font-semibold">{user?.name}</h2>
                            <span className="rounded-full bg-qgold-500 text-sm text-slate-100 font-medium w-fit px-2.5 py-1 text-center">Master Traveler</span>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default Profile;
