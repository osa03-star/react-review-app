import type { ReviewType } from "../type/type.ts";
import { ReviewData } from "../data/data.ts";
import { FaQuoteLeft } from "react-icons/fa";
import Rating from "./Rating.tsx";
import { ScrollArea } from "../components/ui/scroll-area.tsx"

const Review = () => {
  return (
    <ScrollArea className="mt-10 h-[650px] w-full">
      <p className="text-xl font-semibold pb-12 text-left">全てのレビュー</p>
      {ReviewData.map((item: ReviewType) => (
        <div key={item.id} className="rounded-lg border bg-card text-card-foreground shadow-sm p-5 mb-5">
          <div className="flex items-center justify-between mb-4">
            <FaQuoteLeft className="text-[hsl(0_0%_89.8%)]"/>
            <Rating 
              star={item.star}
            />
          </div>
          <p className="text-left text-[14px] pb-2">{item.text}</p>
          <p className="text-left text-[12px] text-gray-500">{item.name}</p>
        </div>
      ))}
    </ScrollArea>
  )
}

export default Review;