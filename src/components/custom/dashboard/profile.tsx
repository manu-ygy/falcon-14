'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/src/components/ui/avatar';
import { useSession } from 'next-auth/react';
import { Door, User } from '@phosphor-icons/react/dist/ssr';
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
        <div className="w-full flex border py-6 px-8 gap-6 items-center rounded-2xl">
            {!user ? (
                <span>Loading...</span>
            ) : (
                <>
                    <Avatar className="w-24 h-24">
                        <AvatarImage src={user.image ? user.image : '/images/default.png'} />
                        <AvatarFallback>
                            <User size="32" />
                        </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col gap-2">
                        <h2 className="text-3xl font-semibold">Morning, {user?.name}!</h2>
                        <div className="flex gap-2 opacity-70">
                            <span>DD/MM/YYYY</span>
                            <span>{(user?.accountType === 'guest') ? 'Tamu' : (user?.accountType === 'student') ? 'Murid' : 'Administrator'}</span>
                        </div>
                    </div>

                    <div className="flex gap-2 ml-auto">
                        <Button className="bg-indigo-500">
                            Edit Profile
                        </Button>

                        <Button variant={'destructive'}>
                            <Door />
                            Logout
                        </Button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Profile;
