
import { blog } from "@/app/page";
import axios, { AxiosError } from "axios"
const API_URL = process.env.NEXT_PUBLIC_backend_url;

export async function getBlogs (){
    const response= await axios.get(`${API_URL}/posts`);
    if (!response) throw new Error('Network response was not ok');
    return response.data.response;
}

export async function getBlog (id:string){

    try{
        const response= await axios.get(`${API_URL}/posts/${id}`);
        return response.data.response;
    }catch(err){

        const errors = err as Error | AxiosError;
        if(!axios.isAxiosError(errors)){
            console.log(errors.message);
        }
        console.log(errors.message);
    }
    
}

export async function postBlog ({title,content}:blog){
    const response= await axios.post(`${API_URL}/posts`,
        {
            title,
            content
        }
    );
    if (!response) throw new Error('Network response was not ok');
    return response.data;
}


export async function deleteBlog (id:string){
    const response= await axios.delete(`${API_URL}/posts/${id}`);
    if (!response) throw new Error('Network response was not ok');
    return response.data;
}

export async function updateBlog ({title,content}:blog,id:string){
    const response= await axios.put(`${API_URL}/posts/${id}`,
        {
            title,
            content
        }
    );
    if (!response) throw new Error('Network response was not ok');
    return response.data;
}
