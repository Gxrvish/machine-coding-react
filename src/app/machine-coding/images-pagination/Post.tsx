"use client"
import { useEffect, useState } from "react"
import Pagination from "./Pagination"
import "./pagination.css"

interface ImageData {
    id: string;
    author: string;
    download_url: string;
}

const Post = () => {
    const [data, setData] = useState<ImageData[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=5`)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => console.error("Error fetching data:", error));
    }, [currentPage]);

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="flex flex-row items-center justify-center bg-gray-100 p-4 gap-5">
                {
                    data.map((item) => (
                        <div key={item.id} className="flex flex-col items-center justify-center">
                            <img src={item.download_url} alt={item.author} className="w-64 h-64 object-cover mb-4" />
                        </div>
                    ))
                }
            </div>
            <Pagination pageNo={currentPage} setPageNo={setCurrentPage}/>
        </div>
    )
}

export default Post
