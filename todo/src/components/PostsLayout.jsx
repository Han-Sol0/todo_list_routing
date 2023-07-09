import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PostItem } from "./PostItem";

export const PostsLayout = (id) => {
  const [data, setData] = useState([]);
  useEffect(() => {
        fetch(`http://localhost:3005/todos/${id}`
        )
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
    }, []);
 
  return (    
    <div>{id ? <PostItem key={id} {...data} /> : <div>Ошибка</div>}</div>
  );
};
