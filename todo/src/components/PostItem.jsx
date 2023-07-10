import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export const PostItem = ({
    id,
    title,
    completed,
    handleDelete,
    handleUpdate,
}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [postValue, setPosValue] = useState(title);

    const handleChange = (e) => {
        setPosValue(e.target.value);
    };
    const handleEdit = () => {
        setIsEdit((prevState) => !prevState);
    };
    const sendEditPost = (id, data) => {
        handleUpdate(id, data);
        setIsEdit((prevState) => !prevState);
    };
    const [isActive, setIsActive] = useState(false);
    const handleClick = (event) => {
        setIsActive((current) => !current);
    };
    return (
        <div
            style={{
                border: "1px solid black",
                marginTop: "7px",
                padding: "10px 3px",
            }}
        >
            <div>
                {isEdit ? (
                    <input value={postValue} onChange={handleChange} />
                ) : (
                    <Link to={`/${id}`}>
                        <p
                            className={!isActive ? "case" : ""}
                            onClick={handleClick}
                        >
                            {postValue}
                        </p>
                    </Link>
                )}
            </div>
            <input type="checkbox" checked={completed} onChange={() => {}} />
            <button onClick={() => handleDelete(id)}>Delete</button>

            {isEdit ? (
                <div>
                    <button onClick={() => sendEditPost(id, postValue)}>
                        Отправить
                    </button>
                    <button>Отмена</button>
                </div>
            ) : (
                <button onClick={handleEdit}>Edit</button>
            )}
        </div>
    );
};
