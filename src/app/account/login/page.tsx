import { LoginForm } from './form';
import { Suspense } from 'react';

export default function Login() {
    return (
        <div className="w-full h-screen bg-zinc-900/50 fixed flex">
            <div className = "w-full h-full bg-zinc-900/50 absolute top-0 left-0 -z-[10]"></div>
            <img src="/images/gedung.jpg" className="absolute h-[calc(100%+8px)] w-2/3 min-h-[20rem] -top-[4px] -left-[4px] blur-sm opacity-50 select-none mask-image-r -z-10" alt="Background"/>
            <div className="absolute w-full h-full bg-primary-gradient top-0 left-0 -z-[11]"></div>

            <div className = "bg-slate-100 p-16 ml-auto w-full flex flex-col gap-8">
                <div className="flex gap-8 items-center">
                    <h1 className="text-4xl font-semibold">Login</h1>
                    <hr className="border-slate-400/50 w-full h-fit"></hr>
                </div>

                <Suspense fallback={<>Loading...</>}>
                    <LoginForm />
                </Suspense>

            </div>
        </div>
    );
}