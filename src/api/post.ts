export const getPosts = async()=> {
   const response = await fetch("http://localhost:3003/posts");
   
   return response.json();
}