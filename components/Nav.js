import request from "../utils/request"
import {useRouter} from "next/router";
function Nav() {
    const router=useRouter();
    return (
    <>
        <div className="relative">
            <div className="flex px-10 space-x-10 overflow-x-scroll text-2xl sm:px-20 whitespace-nowrap sm:space-x-20 scrollbar-hide">
                {/* lets make loop file inside request js */}
                {Object.entries(request).map(([key,{
                    title,url
                }])=>(
                    <h2 key={key} onClick={()=>router.push(`/?genre=${key}`)} className="transition duration-100 transform cursor-pointer last:pr-20 hover:scale-125 hover:text-white" > {title} </h2>
                ))}
            </div>
        </div>
        <div  className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
    </>
    )
}

export default Nav
