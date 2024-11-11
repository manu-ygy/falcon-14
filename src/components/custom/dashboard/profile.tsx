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
        <div className="w-full h-fit flex py-6 px-8 gap-6 items-center rounded-3xl max-md:flex-col max-md:text-center bg-qmaroon-500 text-slate-100">        
            {!user ? (
                <>
                    <div className = "min-w-24 h-24 bg-border rounded-full animate-pulse"></div>

                    <div className="flex flex-col gap-2 text-transparent select-none items-center">
                        <h2 className="text-3xl bg-border rounded-lg overflow-hidden animate-pulse">Lorem ipsum skibidi sigma!</h2>
                    </div>

                    <div className="flex gap-2 lg:ml-auto">
                        <Button disabled className="bg-indigo-500">
                            Edit Profile
                        </Button>

                        <Button disabled variant={'destructive'} className = "flex gap-2">
                            <SignOut />
                            Logout
                        </Button>
                    </div>
                </>
            ) : (
                <>
                    <Avatar className="w-24 h-24 border">
                        <AvatarImage src={user.image ? user.image : '/images/default.png'} />
                        <AvatarFallback>
                            <User size="32" />
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-2">
                        <small className="text-base opacity-70">Welcome back,</small>
                        <h2 className="text-3xl font-semibold">{user?.name}</h2>
                        <span className="rounded-full bg-qgold-500 text-sm text-slate-100 font-medium w-fit px-2.5 py-1 text-center">Master Traveler</span>
                    </div>

                    <div className="flex lg:ml-auto gap-4">
                        <Button variant={'ghost'} className = "px-0 hover:bg-transparent hover:text-zinc-900">
                            <Gear size={28}/>
                        </Button>

                        <Button variant={'ghost'} className="text-red-500 p-0 hover:bg-transparent hover:text-red-600">
                            <SignOut size={28}/>
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
