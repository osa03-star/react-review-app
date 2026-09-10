import { Star } from "lucide-react"
import type { JSX } from 'react';

type RatingProps = {
  star: number;
}

const Rating = (props: RatingProps): JSX.Element => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={
            star <= props.star
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }
        />
      ))}
    </div>
  )
}

export default Rating