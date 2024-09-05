"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Alert, AlertDescription, AlertTitle} from "@/components/ui/alert"

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
import { postBlog } from "@/lib/axiosRequests"
import { redirect } from 'next/navigation';
import Link from "next/link"


const formSchema = z.object({
  title: z.string().min(5).max(30),
  content: z.string().min(10).max(300)
})

export default function ProfileForm() {
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
      const response=await postBlog(values);
      if(response){
        alert("Blog Posted")  
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
                    <Input placeholder="Title" {...field} />
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
                  placeholder="The content of the blog goes here....."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
                <FormDescription>
                You can create a blog here.
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