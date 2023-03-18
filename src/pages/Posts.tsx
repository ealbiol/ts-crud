import React, { useState, useEffect } from 'react';
import { deletePost, getPosts, postPost } from "../api/post"
import { Post } from '../types/Post';
import { Confirm } from "semantic-ui-react";
import BasicModal from '../components/BasicModal';
import PostForm from '../components/PostForm';



export default function Posts() {
    const initPost: Post = {
        title: "",
        content: "",
        author: ""
    }

    const logoUrl = "https://source.unsplash.com/random"

    const [posts, setPosts] = useState<Array<Post>>([])

    const [showModal, setShowModal] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [reload, setReload] = useState(false);

    const [selectedPost, setSelectedPost] = useState<Post>(initPost)
    /**
     * In onOpenCloseModal: When closing modal values are cleaned.
     */
    const onOpenCloseModal = () => {
        if (showModal) setSelectedPost(initPost);
        setShowModal((prevState => !prevState))
    };

    const onOpenCloseConfirm = () => setShowConfirm((prevState) => !prevState);
    const onReload = () => {
        setReload((prevState) => !prevState);
    };


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

    }, [reload]);

    const onUpdatePost = (post: Post) => {
        console.log("POST", post);
        setSelectedPost(post);
        onOpenCloseModal();
    }
    const onDeletePost = (id: number) => {
        deletePost(id);
        onOpenCloseConfirm();
        onReload();
    }

    return (
        <div className='main-margin-page mt-5% pb-7%'>
            <div className='button-black w-52 h-14 mt-40px mb-3%' onClick={onOpenCloseModal}>
                New Post
            </div>
            <div className="my-7%">
                {posts?.map((post, id) => (
                    <div className="flex mb-150px" key={id}>
                        <div className="min-w-60%">
                            <div className='text-xxl font-black max-w-80%'>{post.title}</div>
                            <div className='mb-40px'>by {post.author}.</div>
                            <div className='text-slate-500 text-md max-w-80%'>{post.content}</div>
                            <div className='flex max-w-80% gap-5'>
                                <div className='button-black w-56 mt-20px h-14' onClick={() => onUpdatePost(post)}>
                                    Update Post
                                </div>
                                <div
                                    className='button-black w-56 mt-20px'
                                    onClick={() => {
                                        setSelectedPost(post);
                                        setShowConfirm(true);
                                    }}>
                                    Delete Post
                                </div>
                            </div>
                        </div>
                        <div className="min-w-40% ">
                            <img alt='logo' className='rounded' style={{ minWidth: "100%" }} src={String(logoUrl + "?" + id)} />
                        </div>
                    </div>
                ))}
            </div>
            <BasicModal
                show={showModal}
                close={onOpenCloseModal}
                title={selectedPost.id ? "Update post" : "Create new post"}
                size="large"
            >
                <PostForm
                    post={selectedPost}
                    onClose={onOpenCloseModal}
                    onReload={onReload}
                />
            </BasicModal>
            <Confirm
                open={showConfirm}
                onCancel={onOpenCloseConfirm}
                onConfirm={() => onDeletePost(selectedPost.id || 0)}
                content={`Delete ${selectedPost.title} ?`}
                size="mini"
            />
        </div>

    )
}
