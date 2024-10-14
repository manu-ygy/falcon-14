'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { useSession } from 'next-auth/react';
import { SignOut, Dot, User } from '@phosphor-icons/react/dist/ssr';
import { Button } from '@/src/components/ui/button';

// Definisikan tipe untuk User
interface UserType {
    name: string
    image?: string
    accountType: 'guest' | 'student' | 'administrator' // Sesuaikan tipe ini dengan nilai yang mungkin ada
}

const Profile = () => {
    const { data } = useSession({
        required: true
    });

    // Gunakan tipe yang telah didefinisikan untuk user
    const user = data?.user as UserType;

    return (
        <div className="w-full flex border py-6 px-8 gap-6 items-center rounded-2xl max-md:flex-col text-center">        
            {!user ? (
                <>
                    <div className = "min-w-24 h-24 bg-border rounded-full animate-pulse"></div>

                    <div className="flex flex-col gap-2 text-transparent select-none items-center">
                        <h2 className="text-3xl bg-border rounded-lg overflow-hidden animate-pulse">Lorem ipsum skibidi sigma!</h2>
                        <div className="flex gap-2 items-center animate-pulse">
                            <div className = "flex gap-1 text-sm">
                                <span className = "bg-border px-2 py-0.5 rounded-lg">Gyat mewing</span>
                                <span className = "bg-border px-2 py-0.5 rounded-lg">Fanum tax mewing</span>
                            </div>
                        </div>
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
                        <h2 className="text-3xl">Pagi, <span className="font-semibold">{user?.name}</span>!</h2>
                        <div className="flex gap-2 items-center">
                            <div className = "flex gap-1 text-sm text-slate-100">
                                <span className = "bg-indigo-500 px-2 py-0.5 rounded-full">2025-2026</span>
                                <span className = "bg-indigo-500 px-2 py-0.5 rounded-full">2025-2026</span>
                            </div>
                            <Dot weight='bold'/>
                            <span className = "opacity-70">{(user?.accountType === 'guest') ? 'Tamu' : (user?.accountType === 'student') ? 'Murid' : 'Administrator'}</span>
                        </div>
                    </div>

                    <div className="flex gap-2 lg:ml-auto">
                        <Button className="bg-indigo-500">
                            Edit Profile
                        </Button>

                        <Button variant={'destructive'} className = "flex gap-2">
                            <SignOut />
                            Logout
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
