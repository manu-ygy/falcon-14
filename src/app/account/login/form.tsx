'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { LoginUserInput, loginUserSchema } from '@/lib/user-schema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Envelope, Eye, GoogleLogo, Key, SpinnerGap } from '@phosphor-icons/react/dist/ssr';

export const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState('');
    const [submitting, setSubmitting] = useState(false);

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';

    const methods = useForm<LoginUserInput>({
        resolver: zodResolver(loginUserSchema),
    });

    const {
        reset,
        handleSubmit,
        register,
        formState: { errors },
    } = methods;

    const onSubmitHandler: SubmitHandler<LoginUserInput> = async (values) => {
        try {
            setSubmitting(true);

            const res = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password,
                redirectTo: callbackUrl,
            });

            setSubmitting(false);

            if (!res?.error) {
                toast.success('successfully logged in');
                router.push(callbackUrl);
            } else {
                reset({ password: '' });
                const message = 'invalid email or password';
                toast.error(message);
                setError(message);
            }
        } catch (error: any) {
            toast.error(error.message);
            setError(error.message);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)} className = "flex flex-col gap-8">
            {error && (
                <p className='text-center bg-red-300 py-4 mb-6 rounded'>{error}</p>
            )}

            {/*
      <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
        <p className='text-center font-semibold mx-4 mb-0'>OR</p>
      </div>
*/}

            <Button variant={'outline'} className = "w-full shadow-none flex gap-4 rounded-3xl" type='button'
                onClick={() => signIn('google', { callbackUrl })}
                role='button'
            >
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png" className = "w-6 h-6"/>

        Masuk dengan Google
            </Button>
        </form>
    );
};