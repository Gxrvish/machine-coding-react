"use client";
import "./ImagesCarousel.css";

import { useEffect, useState } from "react";

interface ImageData {
    id: string;
    download_url: string;
}

const ImagesCarousel = () => {
    const [data, setData] = useState<ImageData[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const LIMIT = 10;

    const fetchImages = async (page: number) => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://picsum.photos/v2/list?page=${page}&limit=${LIMIT}`,
            );
            const newImages = await response.json();
            setData((prev) => [...prev, ...newImages]);
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchImages(currentPage);
    }, [currentPage]);

    const handleNext = () => {
        const nextIndex = currentIndex + 1;
        if (nextIndex === data.length - 1) {
            setCurrentPage((prev) => prev + 1);
        }
        setCurrentIndex(nextIndex);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
    };

    return (
        <div className="carousel-container">
            <span className="carousel-button prev" onClick={handlePrev}>
                &#10094;
            </span>
            <span className="carousel-button next" onClick={handleNext}>
                &#10095;
            </span>

            <div className="carousel-image-wrapper h-screen">
                {loading ? (
                    <div className="loading-spinner">Loading...</div>
                ) : (
                    data[currentIndex] && (
                        <img
                            key={data[currentIndex].id}
                            src={data[currentIndex].download_url}
                            alt={`Image ${data[currentIndex].id}`}
                        />
                    )
                )}
            </div>
        </div>
    );
};

export default ImagesCarousel;
