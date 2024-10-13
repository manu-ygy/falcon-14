import Image from 'next/image';
import React from 'react';

interface ILogoProps {
    className?: string
} 
const Logo = ({ className }: ILogoProps) => {
    return (
        <div className='flex flex-row'>
            <Image className="w-12 h-auto aspect-square object-contain" src="/images/yss.png" width={100} height={100} alt="Logo SMA Yos Sudarso Karawang" />
            <Image className="w-12 h-auto aspect-square object-contain" src="/images/yosuka.png" width={100} height={100} alt="Logo SMA Yos Sudarso Karawang" />
        </div>
    );
};

export default Logo;