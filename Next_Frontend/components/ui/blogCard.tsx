import { blog } from "@/app/page"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"

export const BlogCard= ({title,content}:blog)=>{
    return <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {/* <CardDescription>Card Description</CardDescription> */}
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
  </Card>
  
}