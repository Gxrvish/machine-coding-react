import { useState } from "react";
import "./starRating.css"

const StarRating = ({starCount = 5}) => {
    const [value, setValue] = useState(0);
    const handleClick = (index : number) => {
        if (value === index + 1) {
            setValue(0);
        } else {
            setValue(index + 1);
        }
    }
    return (
        <div className="star-container flex justify-center items-center h-screen">
            {
                new Array(starCount).fill(0).map((_, index) => (
                    <span
                        key={index}
                        className={index < value ? "gold" : ""}
                        onClick={() => handleClick(index)}
                        onMouseOver={() => setValue(index + 1)}
                    >
                            &#9733;
                    </span>
                ))
            }
        </div>
    )
}

export default StarRating
