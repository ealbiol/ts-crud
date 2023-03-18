import React, { useContext, useEffect, useState } from 'react';
import { Form, Message } from "semantic-ui-react";
import { useFormik } from "formik";

import { login } from '../api/login';
import { Response } from '../types/Response';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<Response>({
        status: 200,
    });
    const [visibleMessage, setVisibleMessage] = useState(false);
    const { user, setUser } = useContext(AuthContext);

    const onSubmit = async (formValue: any) => {
        console.log("Form", formValue)
        const result: Response = await login(formValue);
        if (result.status === 200 && result.foundUser) {
            setUser(result.foundUser);
            localStorage.setItem("user", JSON.stringify(result.foundUser));
        } else {
            setErrorMessage(result)
            setVisibleMessage(true);
            handleDismiss();
        }
        console.log("Result", result)
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (formValue) => onSubmit(formValue)
    })

    const handleDismiss = () => {
        setTimeout(() => {
            setVisibleMessage(false);
        }, 2000)
    }

    useEffect(() => {
        if (user.id) {
            navigate("/blog");
        }
    }, [user, navigate]);

    return (
        <div>
            {visibleMessage &&
                (
                    <Message onDismiss={() => setVisibleMessage(false)} >
                        <Message.Header>Status code: {errorMessage.status}</Message.Header>
                        <p>
                            {errorMessage.desc}
                        </p>
                    </Message>
                )}
            <Form onSubmit={formik.handleSubmit}>
                <Form.Input
                    name="email"
                    placeholder="Email Address"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    error={formik.errors.email}
                />
                <Form.Input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.errors.password}
                />
                <Form.Button type="submit" primary fluid loading={formik.isSubmitting}>
                    Enter
                </Form.Button>
            </Form>
        </div>
    )
}
