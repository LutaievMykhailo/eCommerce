type RatingProps = {
    rating: number;
}


function Rating({rating}: RatingProps) {

    return (
        <div className="flex my-3">
            {
                Array.from({length: 5}).map((_, index)=>(
                    <svg
                        key={index}
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill={
                            index < Math.round(rating)
                            ? "gold"
                            : "gray"
                        }
                    >
                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                    </svg>
                ))
            }
            <span className="ml-2">{rating}</span>
            
        </div>
    )
}

export default Rating;