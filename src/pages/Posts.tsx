import React, { useState, useEffect } from 'react';
import { getPosts } from "../api/post"
import { Post } from '../types/Post';
export default function Posts() {

    const [posts, setPosts] = useState<Array<Post>>([])
    const logoUrl = "https://source.unsplash.com/random"

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
            <div className="my-7% mx-15%">
                {posts?.map((post, id) => (
                    <div className="flex mb-150px" key={id}>
                        <div className="min-w-60%">
                            <div className='text-xxl font-black'>{post.title}</div>
                            <div className='mb-40px'>{post.author}</div>
                            <div className='text-slate-500 text-md max-w-80%'>{post.content}</div>
                        </div>
                        <div className="min-w-40%">
                            <img alt='logo' style={{ minWidth: "100%" }} src={String(logoUrl + "?" + id)} />
                        </div>
                    </div>
                ))}
            </div>

        </div>

    )
}
