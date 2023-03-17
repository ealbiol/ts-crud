export const getUsers = async()=> {
    const response = await fetch("http://localhost:3003/users");
    
    return response.json();
 }