import { blog } from "@/app/page"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import { Button } from "./button"
import { deleteBlog } from "@/lib/axiosRequests"
import Link from "next/link"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"




export const FullBlogCard= ({title,content,id}:blog)=>{
    return <Card className="h-5/6 mx-10 mt-10">
    <CardHeader>
      <CardTitle className="text-5xl">{title}</CardTitle>
      {/* <CardDescription>Card Description</CardDescription> */}
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
    <CardFooter className="flex-row-reverse">

    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">delete</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this blog from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <Link href={"/"}> 
            <AlertDialogAction onClick={async()=>{
              await deleteBlog(id||"");
            }} >Continue</AlertDialogAction>
          </Link>

        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
      
        
      <Link href={`/editBlog/${id}`}>
        <Button className="m-2 bg-[#e3c137]">edit</Button>
      </Link>
    </CardFooter>
  </Card>
  
}