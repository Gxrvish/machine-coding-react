"use client";
import { useEffect, useState } from 'react';
import "./InfiniteScroll.css";
import Post from './Post';

interface PostItem {
    id: string;
    author: string;
    url: string;
}

const InfiniteScroll = () => {
    const [data, setData] = useState<PostItem[]>([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        const fetchData = async () => {
            try {
                fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
                    .then(response => response.json())
                    .then((newData: PostItem[]) => {
                        setData((oldData) => [...oldData, ...newData]);
                    });
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }
        , [page]);
    return (
        <Post data={data} setPage={setPage}/>
    )
}

export default InfiniteScroll
