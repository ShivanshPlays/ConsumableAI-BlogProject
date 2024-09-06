import { BlogCard } from "@/components/ui/blogCard";
import { getBlogs } from "@/lib/axiosRequests";
import Link from "next/link";

export interface blog {
  id?: string;
  title: string;
  content: string;
}

//using a nextJS asynchronous component.
export default async function Home() {
  const blogs: blog[] = await getBlogs();

  return (
    <div className="flex">
      <div className="p-10 w-screen">
        {blogs.map((blog) => (
          <div key={`${blog.id}`} className="mt-4 w-full">
            <Link href={`/blog/${blog.id}`}>
              <BlogCard title={blog.title} content={blog.content}></BlogCard>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
