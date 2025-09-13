"use client";
import { useEffect, useState } from "react";

import Post from "./Post";

export interface PostItem {
    id: string;
    author: string;
    download_url: string;
    url: string;
}

const InfiniteScroll = () => {
    const [data, setData] = useState<PostItem[]>([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(
                    `https://picsum.photos/v2/list?page=${page}&limit=3`,
                );
                if (!res.ok)
                    throw new Error(`HTTP error! status: ${res.status}`);
                const newData: PostItem[] = await res.json();

                setData((old) => [...old, ...newData]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, [page]);

    return <Post data={data} setPage={setPage} />;
};

export default InfiniteScroll;
