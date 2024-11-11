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
      
            <div className="flex flex-col gap-3">
                <label>Email address</label>

                <div className = "flex border rounded-md items-center pl-4">
                    <Envelope size="24" className = "opacity-70"/>
                    <Input type='email' {...register('email')} placeholder='Email address' className = "bg-transparent border-0"/>
                </div>

                {errors['email'] && (
                    <span className='text-red-500 text-xs pt-1 block'>
                        {errors['email']?.message as string}
                    </span>
                )}
            </div>
    
            <div className="flex flex-col gap-3">
                <label>Password</label>

                <div className = "w-full gap-4 flex">
                    <div className = "flex w-full border rounded-md items-center pl-4">
                        <Key size="24" className = "opacity-70"/>
                        <Input type='password' {...register('password')} placeholder='Email address' className = "bg-transparent border-0"/>
                    </div>

                    <Button type = "button">
                        <Eye size = "24"/>
                    </Button>
                </div>

                {errors['password'] && (
                    <span className='text-red-500 text-xs pt-1 block'>
                        {errors['password']?.message as string}
                    </span>
                )}
            </div>

            <Button type='submit'disabled={submitting} className='flex gap-2'>
                {submitting ? <SpinnerGap size = "24" className='animate-spin'/> : 'Sign In'}
            </Button>

            {/*
      <div className='flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5'>
        <p className='text-center font-semibold mx-4 mb-0'>OR</p>
      </div>
*/}

            <span className = "text-center">Atau</span>

            <Button variant={'outline'} className = "w-full" type='button'
                onClick={() => signIn('google', { callbackUrl })}
                role='button'
            >
                <GoogleLogo className = "mr-2 h-4 w-4"/>

        Continue with Google
            </Button>
        </form>
    );
};