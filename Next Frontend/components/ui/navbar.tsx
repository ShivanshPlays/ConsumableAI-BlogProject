import Link from "next/link"


export const NavBar=()=>{
    return <div className="flex px-8 py-2 justify-between border-b">
        
        <div className="flex justify-center items-center font-bold text-xl">
            <Link href={"/"}>
                Blogs @Consumable_AI
            </Link>
        </div>
        
        
        <div className="flex">
            <Link href={"/postBlog"}>
                <button type="button" className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 ">New</button>
            </Link>
            
            
        </div>
    </div>
}