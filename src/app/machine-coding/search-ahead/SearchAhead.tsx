"use client";
import { useEffect, useRef, useState } from 'react';
import "./SearchAhead.css";

const STATUS = {
    LOADING: "Loading",
    ERROR: "Error",
    SUCCESS: "Success",
}

const SearchAhead = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState<{
        products:
        Array<{ id: number, name: string, [key: string]: any }>
    }>
        ({ products: [] });
    const [status, setStatus] = useState(STATUS.LOADING);
    const cache = useRef<{ [key: string]: any }>({});

    useEffect(() => {
        const abortController = new AbortController();
        const { signal } = abortController;
        const fetchData = async () => {
            try {
                setStatus(STATUS.LOADING);
                if (cache.current[query]) {
                    setStatus(STATUS.SUCCESS);
                    setData(cache.current[query]);
                    return;
                }
                const response = await fetch(`https://dummyjson.com/products/search?q=${query}`, { signal });
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const json = await response.json();
                setStatus(STATUS.SUCCESS);
                setData(json);
                cache.current[query] = json;
            } catch (error) {
                if ((error as DOMException).name !== 'AbortError') {
                    setStatus(STATUS.ERROR);
                }
            }
        };
        const timer = setTimeout(fetchData, 1000);
        return () => {
            clearTimeout(timer);
            abortController.abort();
        };
    }, [query]);

    return (
        <div className="search-container">
            <div className="search-input">
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            </div>
            <div>
                {status === STATUS.LOADING && <div className="loading">Loading...</div>}
                {status === STATUS.ERROR && <div className="error">Error fetching data</div>}
                {
                    status === STATUS.SUCCESS && data.products.length !== 0 && (
                        data.products && data.products.map((item) => (
                            <div key={item.id} className="search-item">
                                <div className="search-item-details">
                                    <h3>{item.title}</h3>
                                </div>
                            </div>
                        )))
                }
            </div>
        </div>
    )
}

export default SearchAhead
