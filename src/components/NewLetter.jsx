import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import SvgIcon from "./svgIcon";

function NewLetter() {
    return (
        <NewLetterStyled>
            <div className="intro">Get Our Latest News & Update</div>
            <div className="form">
                <Formik
                    initialValues={{ email: "", name: "" }}
                    validate={(values) => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = "Required";
                        } else if (
                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                values.email
                            )
                        ) {
                            errors.email = "Invalid email address";
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} className="flex">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email && errors.email}
                            <button
                                type="submit"
                                className="bg-[#f4796c] text-white rounded-md px-11 py-2"
                                disabled={isSubmitting}
                            >
                                Submit Now
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
            <div className="color-183354">Follow us</div>
            <div className="flex gap-2">
                <SvgIcon name="list" />
            </div>
        </NewLetterStyled>
    );
}

export default NewLetter;

export const NewLetterStyled = styled.div`
    padding: 79px 315px 99px;
    background-color: #e8f1f1;
    display: flex;
    gap: 35px;
    align-items: center;
    .color-183354 {
        color: #183354;
    }
    .intro {
        color: #183354;
        font-size: 24px;
        font-weight: 700;
        line-height: 2rem;
        letter-spacing: -1px;
    }
    form {
        width: 100%;
        input {
            padding: 10px;
            width: 210px;
            margin: 5px;
            border-radius: 6px;
            background-color: #fff;
        }
        .error {
            color: red;
            font-size: 12px;
            margin-top: -5px;
            margin-bottom: 5px;
        }
    }
`;
