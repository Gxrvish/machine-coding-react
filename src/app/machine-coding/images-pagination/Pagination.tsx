const Pagination = ({ pageNo, setPageNo }: { pageNo: number; setPageNo: (page: number) => void }) => {
    const handlePrev = () => {
        if (pageNo > 1) {
            setPageNo(pageNo - 1);
        }
    };
    const handleNext = () => {
        setPageNo(pageNo + 1);
    };
    return (
        <div className='pagination-container'>
            <div className={`page-button ${pageNo > 1 ? "" : "hidden"}`}
                onClick={handlePrev}>
                    {"<"}
            </div>
            <div className={`page-button ${pageNo > 1 ? "" : "hidden"}`}
                onClick={() => pageNo > 1 ? setPageNo(pageNo - 1) : null}>
                    {pageNo - 1}
            </div>
            <div className='page-button' >{pageNo}</div>
            <div className='page-button' onClick={() => setPageNo(pageNo + 1)}>{pageNo + 1}</div>
            <div className='page-button' onClick={handleNext}>{">"}</div>
        </div>
    )
}

export default Pagination
