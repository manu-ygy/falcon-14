import React from 'react';
import Icons from './icons';
import { InstagramLogo, TiktokLogo } from '@phosphor-icons/react/dist/ssr';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer
            className="bg-zinc-950 text-white py-12" >
            <div className="container mx-auto px-8 max-w-screen-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className='flex flex-col'>
                        <div className='bg-white w-max rounded-full p-2'>
                            <Icons />
                        </div>
                        <h3 className="text-xl font-bold mt-4 mb-2">SMA Yos Sudarso Karawang</h3>
                        <h3 className="text-base mb-4">Innovative School</h3>
                        <p className="text-sm text-gray-400">Jl. Kertabumi No.12a, Karawang Kulon, Kec. Karawang Barat, Karawang, Jawa Barat 41311</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
                        <ul className="space-y-2">
                            <li><a href="#how-to-make-ecoenzyme" className="text-gray-400 hover:text-white transition-colors">Visi & Misi</a></li>
                            <li><a href="#video" className="text-gray-400 hover:text-white transition-colors">Informasi PPDB</a></li>
                            <li><a href="#what-is-ecoenzyme" className="text-gray-400 hover:text-white transition-colors">Daftar PPDB</a></li>
                            <li><a href="#why-ecoenzyme" className="text-gray-400 hover:text-white transition-colors">OSIS</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-4">Ikuti Kami</h3>
                        <div className="flex space-x-4">
                            <Link href="https://www.instagram.com/techamour_/" className="text-gray-400 hover:text-white transition-colors">
                                <InstagramLogo size={24} />
                            </Link>
                            <Link href="https://www.instagram.com/techamour_/" className="text-gray-400 hover:text-white transition-colors">
                                <TiktokLogo size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-700 text-center">
                    <p>Copyright &copy; 2024 SMA Yos Sudarso Karawang</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;