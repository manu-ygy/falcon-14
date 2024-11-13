'use client';

import {
    ListChecks,
    ThermometerSimple,
} from '@phosphor-icons/react/dist/ssr';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Profile from '@/components/custom/dashboard/profile'
import { motion } from 'framer-motion';

import { Button } from '@/components/ui/button';

const GamePage = () => {
    return (
        <div className = "w-full h-full relative p-4 flex flex-col gap-4">
            <h1 className = "text-3xl font-semibold text-center">Game masak</h1>
        </div>
    );
};

export default GamePage;
