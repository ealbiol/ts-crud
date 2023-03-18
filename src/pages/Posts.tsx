import React, { useState, useEffect } from 'react';
import { deletePost, getPosts, postPost } from "../api/post"
import { Post } from '../types/Post';
import { Button, Confirm } from "semantic-ui-react";
import BasicModal from '../components/BasicModal';
import PostForm from '../components/PostForm';



export default function Posts() {
    const initPost: Post = {
        title: "",
        content: "",
        author: ""
    }
    const [posts, setPosts] = useState<Array<Post>>([])
    const logoUrl = "https://source.unsplash.com/random"

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

    }, [reload])
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
        <div>
            <Button primary onClick={onOpenCloseModal}>
                New Post
            </Button>
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
                        <Button primary onClick={() => onUpdatePost(post)}>
                            Update Post
                        </Button>
                        <Button primary onClick={() => {
                            setSelectedPost(post);
                            setShowConfirm(true);
                        }
                        }>
                            Delete Post
                        </Button>

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
