import React from 'react'
import { useFormik } from "formik";
import { Form } from 'semantic-ui-react';
import { Post } from '../types/Post';
import { postPost, updatePost } from '../api/post';

interface IProps {
    post?: Post;
    onClose: ()=>void
    onReload: ()=>void
}
export default function PostForm(props: IProps) {
    const { post, onClose, onReload } = props;
    const onSubmit = async (formValue : any) => {
        console.log("CREATE POST", formValue)
        // Depending if there is ID we update or create
        // We will only have id in case we're updating
        const result = post?.id ? await updatePost(formValue, post.id) : await postPost(formValue);
        console.log("RESULT", result);
        onClose();
        onReload();
    }
    const formik = useFormik({
        initialValues: {
            title: post?.title  || "",
            content: post?.content || "",
            author: post?.author || ""
        },
        onSubmit: (formValue)=>onSubmit(formValue)
        
    })
    return (
        <Form className='post-form' onSubmit={formik.handleSubmit}>
            <Form.Input
                name="title"
                placeholder="Post Title"
                onChange={formik.handleChange}
                value={formik.values.title}
                error={formik.errors.title}
            />
            <Form.Input
                name="content"
                placeholder="Post Content"
                onChange={formik.handleChange}
                value={formik.values.content}
                error={formik.errors.content}
            />
            <Form.Input
                name="author"
                placeholder="Post Author"
                onChange={formik.handleChange}
                value={formik.values.author}
                error={formik.errors.author}
            />
            <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
                {post?.id ? "Update Post" : "Create Post"}
            </Form.Button>
        </Form>
    )
}
