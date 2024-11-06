"use client"
import TableComponent from "@/src/components/TableComponent"
import { Button } from "@/src/components/ui/button"
import { ChartBar, HomeIcon } from "lucide-react"
import Link from "next/link"
export const groupObject = [
  [
    { "name": "ალქესანდრე ჭანკვეტაძე", "score": 50 },
    { "name": "ვაჩე კაკალაშვილი ", "score": 30 },
    { "name": "გიორგი ხუნდაძე", "score": 30 },
    { "name": "გიორგი გოგოლაძე", "score": 30 },
    { "name": "გიორგი გელაშვილი ", "score": 30 },
    { "name": "გიორგი ჯოხაძე", "score": 30 },
    { "name": "ზაზა ბორისოვი", "score": 25 },
    { "name": "ნიკა მუსერიძე", "score": 25 },
    { "name": "გიორგი მამულაიძე ", "score": 25 },
    { "name": "ილია ზაქარაიძე", "score": 20 },
    { "name": "გიგა ყიფიანი", "score": 10 },
    { "name": "იოანე სარიშვილი", "score": 0 },
    { "name": "ლუკა სიჭინავა", "score": 0 }]
  ,
  [
    { "name": "თემო ველიჯანაშვილი", "score": 60 },
    { "name": "შიო ელიკაშვილი", "score": 35 },
    { "name": "ლუკა გიორგაძე", "score": 25 },
    { "name": "ანდრია ღადუაშვილი", "score": 20 },
    { "name": "დათო მელიქიძე", "score": 5 },
    { "name": "ბექა ბეჟანიშვილი", "score": 5 },
    { "name": "ბუბა ებრალიძე", "score": 0 },
    { "name": "ლაზაღე ღოღობერიძე", "score": 0 },
    { "name": "დავით მეფარიშვილი", "score": 0 },
    { "name": "ნოდიკო ბეჟანიძე", "score": 0 },
    { "name": "ნიკოლოზ ჩაგანავა", "score": 0 },
    { "name": "დაჩი ჯაჯანაშვილი", "score": 0 },
    { "name": "ლაზრე ღოღობერიძე", "score": 0 }
  ],
  [
    { "name": "კესანე ბრეგვაძე", "score": 85 },
    { "name": "ლუკა დათიაშვილი", "score": 75 },
    { "name": "ლუკა ოშორიზე", "score": 50 },
    { "name": "ლუკა რაზმაძე", "score": 50 },
    { "name": "დავიდ დუმბაძე", "score": 20 },
    { "name": "ანდრია დვალი", "score": 35 },
    { "name": "ანდრია ჯანეზაშვილი", "score": 0 },
    { "name": "კონსტანტინე პაპავა", "score": 0 },
    { "name": "დემეტრე არეშიძე", "score": 0 },
    { "name": "ნიკოლოზ ტატიუაშვილი", "score": 0 },
    { "name": "გუგა აკოლაშვილი", "score": 0 },
    { "name": "აკაკი წერეთელი", "score": 0 },
    { "name": "გიორგი წიკლაური", "score": 0 },
    { "name": "მათე კუკუტარია", "score": 0 }
  ],
  [
    { "name": "გიორგი გურიელი", "score": 15 },
    { "name": "ლადო ნიჟარაძე", "score": 30 },
    { "name": "ელენე გაფრინდაშვილი", "score": 5 },
    { "name": "ლუკა სურმანიძე", "score": 0 },
    { "name": "გიორგი კოსტავა", "score": 0 },
    { "name": "ნიკა ბლიაძე", "score": 5 },
    { "name": "ლუკა გვილავა", "score": 10 },
    { "name": "ლუკა ციხელაშვილი", "score": 0 },
    { "name": "რომან მაღრაძე", "score": 0 },
    { "name": "ლუკა შუკვანი", "score": 15 },
    { "name": "დავით ქარაქუსოვი", "score": 20 },
    { "name": "გიორგი ქრისტესიაშვილი", "score": 5 },
    { "name": "ლუკა ფიფია", "score": 15 },
    { "name": "გელუკა გენებაშვილი", "score": 30 },
    { "name": "ნიკა მალაყმაძე", "score": 40 },
    { "name": "ანა კაპანაძე", "score": 5 },
    { "name": "ნიკოლოზ ქათამაძე", "score": 25 },
    { "name": "გაბო დუმბაძე", "score": 25 },
    { "name": "ანდრია ცაცუა", "score": 20 },
    { "name": "ნიკა მაღლაფერიძე", "score": 0 },
    { "name": "პაატა ცუცქირიძე", "score": 0 },
    { "name": "თორნიკე მღებლიშვილი", "score": 20 },
    { "name": "რეზი ხარებავა", "score": 0 },
    { "name": "გურამ გელხაური", "score": 20 },
    { "name": "გიორგი ჩიღვინაძე", "score": 15 },
    { "name": "დავით ლიპარტელიანი", "score": 10 },
    { "name": "ლუკა კელეპტრიშვილი", "score": 0 },
    { "name": "ლუკა პიტნავა", "score": 5 },
    { "name": "ნიკოლოზ მელიჯანაშვილი", "score": 0 },
    { "name": "ლუკა ოყროშიძე", "score": 0 },
    { "name": "ლუკა სუარიშვილი", "score": 0 },
    { "name": "საბა ლაცაბიძე", "score": 0 },
    { "name": "ნინო ზარდიაშვილი", "score": 0 },
    { "name": "ზურა დავითაძე", "score": 0 },
    { "name": "ბარბარე შარიქაძე", "score": 20 },
    { "name": "ლუკა ტოკლიკიშვილი", "score": 15 },
    { "name": "დავით ბერკაცაშვილი", "score": 0 }],
  [
    { name: "გიორგი აბუაშვილი", score: 25 },
    { name: "ლიზა ღიბრაძე", score: 20 },
    { name: "ლუკა მეტრეველი", score: 15 },
    { name: "ნათია კიკვაძე", score: 0 },
    { name: "ირაკლი ოზაშვილი", score: 10 },
    { name: "ბექა ბერაია", score: 0 },
    { name: "გიორგი ომანაძე", score: 0 },
    { name: "სანდრო სიუკაშვილი", score: 20 },
    { name: "უმარ აბუბაკაშვილი", score: 15 },
    { name: "გიორგი დათაშვილი", score: 15 },
    { name: "დათო მელიქიძე", score: 5 },
    { name: "თორნიკე ჟუჟნიაშვილიძე", score: 10 },
    { name: "საბა ბეგიაშვილი", score: 0 },
    { name: "ჯაბა ბეგიაშვილი", score: 0 },
    { name: "გიორგი ტლაშაძე", score: 25 },
    { name: "ნიკოლოზ პეტრიაშვილი", score: 10 },
    { name: "აპოლონ ასანიძე", score: 15 },
    { name: "გიორგი მანაშვილი", score: 15 },
    { name: "ცოტნე გულბანი", score: 0 },
    { name: "გიორგი გამლდია", score: 0 }
  ]
]

export default function GroupDetails({ params }: { params: { groupId: string } }) {
  return (
    <div>
      <TableComponent arr={groupObject[Number(params.groupId)]} urlId={params.groupId} />
    </div>
  )
}
