import { ThumbUpIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import {forwardRef} from 'react';


const Thumbnail=forwardRef(({fetched},ref) =>{

    // console.log(fetched);
    const BASE_URL="https://image.tmdb.org/t/p/original/";
    return (
        <div className="p-2 transition duration-200 ease-in-out transform cursor-pointer group sm:hover:scale-105 hover:z-50">
            <div>
                <Image layout="responsive" src={`${BASE_URL}${fetched.backdrop_path || fetched.poster_path}`|| `${BASE_URL}${fetched.poster_path}`} height={1080} width={1920}/> 
            </div>
            <div>
             <p className="max-w-md truncate">{fetched.overview}</p>
             <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{fetched.title || fetched.original_name}</h2>
             <p className="flex items-center opacity-0 group-hover:opacity-100">{fetched.media_type && `${fetched.media_type}.`}{""}
                {fetched.release_date || fetched.first_air_date}.{""}
                <ThumbUpIcon className="h-5 mx-2"/>{fetched.vote_count}
             </p>
            </div>
        </div>    
    )
})

export default Thumbnail
