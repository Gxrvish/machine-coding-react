import React, { useEffect } from "react";

import type { PostItem } from "./InfiniteScroll";

interface PostProps {
    data: PostItem[];
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Post: React.FC<PostProps> = ({ data, setPage }) => {
    useEffect(() => {
        if (data.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 1 }, // trigger when fully in view
        );

        // Observe the last image
        const lastImg = document.querySelector(
            ".infinite-scroll-image:last-child",
        );
        if (lastImg) observer.observe(lastImg);

        return () => observer.disconnect();
    }, [data, setPage]);

    return (
        <div className="infinite-scroll-container">
            {data.map((item, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    key={item.id}
                    className="infinite-scroll-image"
                    src={item.download_url}
                    alt={`Image ${index + 1} by ${item.author}`}
                />
            ))}
        </div>
    );
};

export default Post;
