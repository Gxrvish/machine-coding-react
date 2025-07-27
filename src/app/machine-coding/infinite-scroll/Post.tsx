import React, { useEffect } from "react";

interface PostProps {
    data: Array<{
        download_url: string;
        [key: string]: unknown;
    }>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

const Post: React.FC<PostProps> = ({ data, setPage }) => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                setPage((prevPage) => prevPage + 1);
            }
        });
        const lastImage = document.querySelector(
            ".infinite-scroll-image:last-child",
        );
        if (lastImage) {
            observer.observe(lastImage);
        }
        return () => {
            observer.disconnect();
        };
    }, [data, setPage]);

    return (
        <div className="infinite-scroll-container">
            {data.map((item: any, index: number) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    key={index}
                    className="infinite-scroll-image"
                    src={item.download_url}
                    alt={`Image ${index + 1}`}
                />
            ))}
        </div>
    );
};

export default Post;
