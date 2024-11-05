import TableComponent from '@/src/components/TableComponent'
import React from 'react'

export default function Page() {
    const group =  [
        { "name": "ლუკა რაზმაძე", "score": 0 },
        { "name": "ანდრია ჯანეზაშვილი", "score": 0 },
        { "name": "კესანე ბრეგვაძე", "score": 0 },
        { "name": "კონსტანტინე პაპავა", "score": 0 },
        { "name": "დავიდ დუმბაძე", "score": 0 },
        { "name": "დემეტრე არეშიძე", "score": 0 },
        { "name": "ნიკოლოზ ტატიუაშვილი", "score": 0 },
        { "name": "გუგა აკოლაშვილი", "score": 0 },
        { "name": "ლუკა დათიაშვილი", "score": 0 },
        { "name": "აკაკი წერეთელი", "score": 0 },
        { "name": "გიორგი წიკლაური", "score": 0 },
        { "name": "მათე კუკუტარია", "score": 0 }
    ]
  return (
    <div>
      <TableComponent arr={group} urlId='38'/>
    </div>
  )
}
