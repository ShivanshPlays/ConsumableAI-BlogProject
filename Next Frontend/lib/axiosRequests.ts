import { blog } from "@/app/page";
import axios from "axios"
const API_URL = 'https://consumableai-blogproject.onrender.com';

export async function getBlogs (){
    const response= await axios.get(`${API_URL}/posts`);
    if (!response) throw new Error('Network response was not ok');
    return response.data;
}

export async function getBlog (id:string){
    const response= await axios.get(`${API_URL}/posts/${id}`);
    if (!response) throw new Error('Network response was not ok');
    return response.data;
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

