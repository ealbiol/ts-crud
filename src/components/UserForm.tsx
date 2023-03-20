import React from 'react'
import { useFormik } from "formik";
import { Form } from 'semantic-ui-react';
import { User } from '../types/User';
import { postUser, updateUser } from '../api/user';

interface IProps {
    user?: User;
    onClose: ()=>void
    onReload: ()=>void
}

export default function UserForm(props: IProps) {
    const { user, onClose, onReload } = props;
    const onSubmit = async (formValue : any) => {
        // Depending if there is ID we update or create
        // We will only have id in case we're updating
        const result = user?.id ? await updateUser(formValue, user.id) : await postUser(formValue);
        onClose();
        onReload();
    }
    const formik = useFormik({
        initialValues: {
            firstName: user?.firstName  || "",
            lastName: user?.lastName || "",
            email: user?.email || "",
            userName: user?.userName || "",
            password: user?.password || ""
        },
        onSubmit: (formValue)=>onSubmit(formValue)
    })
return(
    <Form className='post-form' onSubmit={formik.handleSubmit}>
    <Form.Input
        name="firstName"
        placeholder="User firstname"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        error={formik.errors.firstName}
    />
    <Form.Input
        name="lastName"
        placeholder="User Lastname"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        error={formik.errors.lastName}
    />
    <Form.Input
        name="email"
        placeholder="User Email"
        onChange={formik.handleChange}
        value={formik.values.email}
        error={formik.errors.email}
    />
        <Form.Input
        name="userName"
        placeholder="User Username"
        onChange={formik.handleChange}
        value={formik.values.userName}
        error={formik.errors.userName}
    />
        <Form.Input
        name="password"
        placeholder="User Password"
        onChange={formik.handleChange}
        value={formik.values.password}
        error={formik.errors.password}
    />
    <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
        {user?.id ? "Update User" : "Create User"}
    </Form.Button>
</Form>
)
}


