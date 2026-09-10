import type { ReviewType } from "../type/type.ts";
import { ReviewData } from "../data/data.ts";
import Rating from "./Rating.tsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.tsx"
import { Badge } from "../components/ui/badge.tsx"
import { HiOutlineHandThumbUp, HiOutlineHandThumbDown } from "react-icons/hi2";

const Analysys = () => {
  // 全てのレビューの平均を出す
  const averageStar =
  ReviewData.reduce((sum, review:ReviewType) => sum + review.star, 0) / ReviewData.length

  return (
    <div>
      <p className='text-[rgb(99_102_241)] text-left pb-5'>TESTIMONIAL</p>
      <p className='text-5xl font-bold leading-tight text-gray-900 text-left pb-5'>参加者からの<br />正直なレビューを<br />読む</p>
      <div className='rounded-lg border bg-card text-card-foreground shadow-sm bg-gradient-to-br border-indigo-300 from-white to-indigo-50 pt-4 pb-4'>
        <p className='font-semibold tracking-tight text-lg'>AIによるレビュー分析</p>
        <p className='text-muted-foreground text-xs'>全レビューの総合的な洞察</p>
        <div className='flex items-center justify-center'>
          <p className='text-4xl font-bold pr-4'>{averageStar}</p>
          <Rating 
            star={averageStar}
          />
        </div>
        <Tabs defaultValue="summary" className="w-[400px] flex w-full p-5 items-center justify-center">
          <TabsList className={"mb-2"}>
            <TabsTrigger value="summary">要約</TabsTrigger>
            <TabsTrigger value="good" className={"flex"}>
              <HiOutlineHandThumbUp />
              評価ポイント
            </TabsTrigger>
            <TabsTrigger value="bad" className={"flex"}>
              <HiOutlineHandThumbDown />
              改善点
            </TabsTrigger>
          </TabsList>
          <TabsContent value="summary" className={"text-left"}>
            講演やパネルディスカッションが印象的で、多くの参加者が内容を高く評価しました。ネットワーキングの機会が豊富で、人脈作りに役立ったという声もありました。一方、会場の音響設備に改善の余地を感じた意見がありました。全体的に運営のスムーズさが参加者に好評でした
          </TabsContent>
          <TabsContent value="good" className={"text-[12px] text-bold flex gap-2 flex-wrap"}>
            <Badge variant="outline">パネルディスカッションの質の高さ</Badge>
            <Badge variant="outline">ネットワーキングの機会</Badge>
            <Badge variant="outline">講演者の魅力的な話題</Badge>
          </TabsContent>
          <TabsContent value="bad" className={"text-[12px] text-bold flex gap-2 flex-wrap"}>
            <Badge variant="destructive">音響設備の改善の余地</Badge>
            <Badge variant="destructive">会場の一部の設備</Badge>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default Analysys