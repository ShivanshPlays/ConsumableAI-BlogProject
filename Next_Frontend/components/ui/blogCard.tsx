import { blog } from "@/app/page"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"

export const BlogCard= ({title,content}:blog)=>{
    return <Card className="bg-[#e2e8f0]">
    <CardHeader>
      <CardTitle className="text-4xl">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-xl">
      <p>{content.length>150?content.slice(0,150)+"...":content}</p>
    </CardContent>
  </Card>
  
}