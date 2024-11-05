
import TableComponent from '@/src/components/TableComponent'
import React from 'react'

export default function Page() {
  const group = [
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
  return (
    <div>
      <TableComponent arr={group} urlId='48' />
    </div>
  )
}
