import React, { useState, useEffect } from 'react';
import { deletePost, getPosts } from "../api/post"
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
        <div className='units-wrapper'>
            <div className='units-new-unit-button' onClick={onOpenCloseModal}>
                New Post
            </div>

            <div className="my-7%">
                {posts?.map((post, id) => (
                    <div className="unit-wrapper" key={id}>
                        <div className="unit-text">
                            <div className='unit-text-main'>{post.title}</div>
                            <div className='unit-text-subtitle'>by {post.author}.</div>
                            <div className='unit-text-final'>{post.content}</div>
                            <div className='unit-text-buttons'>
                                <div className='unit-text-button' onClick={() => onUpdatePost(post)}>
                                    Update Post
                                </div>
                                <div className='unit-text-button'
                                    onClick={() => {
                                        setSelectedPost(post);
                                        setShowConfirm(true);
                                    }}>
                                    Delete Post
                                </div>
                            </div>
                        </div>
                        <div className="unit-image-wrapper">
                            <img alt='logo' className='unit-image' src={String(logoUrl + "?" + id)} />
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
