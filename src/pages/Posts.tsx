import React, { useState, useEffect } from 'react';
import { getPosts } from "../api/post"
import { Post } from '../types/Post';
export default function Posts() {

    const [posts, setPosts] = useState<Array<Post>>([])

    useEffect(() => {
        (async () => {
            try {
                const response = await getPosts();
                const posts: Array<Post> = response;
                console.log("post", response);
                setPosts(posts)
            } catch (error) {

            }
        })()
    }, [])


    return (
        <div>
            <h2>Posts List</h2>
            {posts?.map((post, id) => (
                <div key={id}>
                    {post.author}
                    {post.title}
                </div>
            ))}
        </div>

    )
}
