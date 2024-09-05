"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getBlog, updateBlog } from "@/lib/axiosRequests"
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react"
import { blog } from "@/app/page"


const formSchema = z.object({
  title: z.string().min(5).max(30),
  content: z.string().min(10).max(300)
})

export default function ProfileForm() {

    const pathname = usePathname()
    // console.log(pathname);
    const id=pathname.split("/")[2]||"";
    console.log(id);

    const [blog,setblog] =useState<blog>({
      title:"",
      content:""
  });

  async function populateBlog(){
      const resp=await getBlog(id);
      console.log(resp.response);
      setblog(resp.response);

      form.reset({
        title: resp.response.title || "",
        content: resp.response.content || "",
      });
  }
  useEffect(()=>{
      populateBlog();
  },[])


    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        title:"",
        content:""
      },
    })
   
    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      const response=await updateBlog(values,id);
      if(response){
        alert("Blog updated")  
      }
    //   console.log(response);
    }


    return <div className="m-10">

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" defaultValue={blog.title} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  // placeholder="The content of the blog goes here....."
                  defaultValue={blog.content}
                  className="resize-none"
                  {...field}
                />
              </FormControl>
                <FormDescription>
                You can edit the blog here.
                </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />  
            
              <Button type="submit">Submit</Button>
            
            
          </form>
        </Form>
    </div>
  }