'use client';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import React from 'react';

const articles = [{
    title: 'Hello World',
    description: 'lorem ipsum',
    image_url: '',
},
{
    title: 'Hello World',
    description: 'lorem ipsum',
    image_url: '',
},
{
    title: 'Hello World',
    description: 'lorem ipsum',
    image_url: '',
},
{
    title: 'Hello World',
    description: 'lorem ipsum',
    image_url: '',
},
{
    title: 'Hello World',
    description: 'lorem ipsum',
    image_url: '',
},
{
    title: 'Hello World',
    description: 'lorem ipsum',
    image_url: '',
},
{
    title: 'Hello World',
    description: 'lorem ipsum',
    image_url: '',
}
];
function ArticleCarousel() {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <div className="mx-auto w-full">
            <Carousel setApi={setApi} className="w-full">
                <CarouselContent>
                    {articles.map((e, index) =>
                        <CarouselItem key={index} className="basis-1/2 md:basis-1/3 lg:basis-1/4 w-full grid place-items-center">
                            <div className="w-full h-full flex flex-col items-center justify-start relative bg-neutral-200 rounded-2xl p-2">
                                <div className='bg-neutral-400 w-full aspect-video rounded-2xl'></div>
                                <div className='flex flex-col p-2 w-full'>
                                    <p className="z-10 text-lg font-bold">{e.title}</p>
                                    <p className="z-10 text-base">{e.description}</p>
                                </div>
                            </div>
                        </CarouselItem>
                    )}
                </CarouselContent>
                <CarouselPrevious className='disabled:opacity-0 transition-all left-0 rounded-l-none' />
                <CarouselNext className='disabled:opacity-0 transition-all right-0 rounded-r-none' />
            </Carousel>
        </div >
    );
}


const ArticleSection = () => {
    return (
        <div className='flex flex-col gap-8 w-full h-full justify-center items-center'>
            <ArticleCarousel />
        </div>
    );
};

export default ArticleSection;