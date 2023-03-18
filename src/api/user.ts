import { User } from "../types/User";
import { URL } from "./config";

// GET
export const getUsers = async () => {
    const response = await fetch("http://localhost:3003/users");
    return response.json();
}

// POST
export const postUser = async (data: User) => {

    const params = {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch(`${URL}/users`, params);

    return response.json();
}

// PUT
export const updateUser = async (data: User, id: number) => {
    const params = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    }

    const response = await fetch(`${URL}/users/${id}`, params);

    return response.json();
}

// DELETE
export const deleteUser = async (id: number) => {
    const params = {
        method: "DELETE"
    }

    const response = await fetch(`${URL}/users/${id}`, params);

    return response.json();
}