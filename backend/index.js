import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
import {z} from "zod";

const postReqSchema = z.object({
    title: z.string(),
    content: z.string()
    });

    

const prisma = new PrismaClient();

const app= express();
const port=3000;

app.use(cors());
app.use(bodyParser.json());

// GET /posts: Retrieve all blog posts.
// GET /posts/:id: Retrieve a single blog post by ID.
// POST /posts: Create a new blog post.
// DELETE /posts/:id: Delete a blog post by ID.

app.get("/posts",async(req,res)=>{
    const response = await prisma.posts.findMany();
    res.json({
        response
    })
})

app.get("/posts/:id",async(req,res)=>{
    const { id } = req.params;
    console.log(req.params.id);

    const response = await prisma.posts.findFirst({
        
        where: {
            id:parseInt(id)
        }
    });
    res.json({
        response
    })
})

app.put("/posts/:id",async(req,res)=>{
    
    const title =req.body.title;
    const content = req.body.content;

    const response=await prisma.posts.update({
        where:{
            id: parseInt(req.params.id)
        },
        data:{
            title,
            content
        }
    })

    res.json({
        response
    })
})

app.post("/posts",async(req,res)=>{

    const resp=postReqSchema.safeParse(req.body);

    if(!resp.success){
        return res.status(400).json({
            msg:"need both title and content to create a blog"
        });
    }

    const title =req.body.title;
    const content = req.body.content;

    const response=await prisma.posts.create({
        data:{
            title,
            content
        }
    })

    res.json({
        response
    })
})

app.delete("/posts/:id",async(req,res)=>{
    const response=await prisma.posts.delete({
        where:{
            id:parseInt(req.params.id)
        }
    })

    res.json({
        response
    })
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`);
})