import React, { useEffect, useState } from "react";
import {
    matchRoutes,
    useMatch,
    useNavigate,
    useParams,
} from "react-router-dom";
import { PostItem } from "./PostItem";

export const PostsLayout = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3005/todos/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);

    return (
        <div>
            {data.id ? <PostItem key={data.id} {...data} /> : navigate("/404")}
        </div>
    );
};
