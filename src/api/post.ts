
import { Post } from "../types/Post";
import { URL } from "./config";

// GET
export const getPosts = async () => {
   const response = await fetch(`${URL}/posts`);
   return response.json();
}

// POST
export const postPost = async (data: Post) => {

   const params = {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
   }

   const response = await fetch(`${URL}/posts`, params);

   return response.json();
}

// PUT
export const updatePost = async (data: Post, id: number) => {
   const params = {
      method: "PUT",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
   }

   const response = await fetch(`${URL}/posts/${id}`, params);

   return response.json();
}

// DELETE
export const deletePost = async (id: number) => {
   const params = {
      method: "DELETE"
   }

   const response = await fetch(`${URL}/posts/${id}`, params);

   return response.json();
}