"use client"

import { blog } from "@/app/page"
import { BlogCard } from "@/components/ui/blogCard";
import { FullBlogCard } from "@/components/ui/fullBlogCard";
import { getBlog } from "@/lib/axiosRequests";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

export default function Blog(){

    const pathname = usePathname()
    // console.log(pathname);
    const id=pathname.split("/")[2]||"";
    // console.log(id);

    const [blog,setblog] =useState<blog>({
        title:"",
        content:""
    });

    async function populateBlog(){
        const resp=await getBlog(id);
        console.log(resp.response);
        setblog(resp.response);
    }
    useEffect(()=>{
        populateBlog();
    },[])

    return <div  className="h-screen">
        <FullBlogCard title={blog.title} content={blog.content} id={id}> </FullBlogCard>
    </div>
    // return 
}