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
            <div style={{ border: "4px solid black" }} className="my-7% mx-15%">
                {posts?.map((post, id) => (
                    <div style={{ border: "4px solid red" }} className="flex mb-150px" key={id}>
                        <div style={{ border: "4px solid green" }} className="min-w-60%">
                            <div className='text-xxl font-black'>{post.title}</div>
                            <div className='mb-40px'>{post.author}</div>
                            <div style={{border:"4px solid pink"}} className='text-slate-500 text-md max-w-80%'>{post.content}</div>
                        </div>
                        <div style={{ border: "4px solid black" }} className="min-w-40%">
                            IMAGE
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}
