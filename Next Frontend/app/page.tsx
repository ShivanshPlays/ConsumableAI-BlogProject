"use client"

import {BlogCard} from "@/components/ui/blogCard"
import { Button } from "@/components/ui/button"
import {getBlogs} from "@/lib/axiosRequests";
import Link from "next/link";

import { useEffect, useState } from "react"

export interface blog {
  id?:string,
  title:string,
  content:string
}

export default function Home() {

  
  const [blogs,setblogs] =useState<blog[]>([]);

  async function getb() {
    const resp=await getBlogs();
    // console.log(resp.response);
    setblogs(resp.response);
  }
  useEffect(()=>{
    getb();
  },[])
  return (

    <div className="flex">
      <div className="p-10">
        {blogs.map(blog=>
        <div className="mt-3">
            <Link href={`/blog/${blog.id}`}>
              <BlogCard title={blog.title} content={blog.content}></BlogCard>
            </Link>
        </div>
        
          
        )}
      </div>
      
     
      
    </div>
  )
}
