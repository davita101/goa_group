"use client"
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Card, CardTitle } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import { Minus, Plus, SortAsc, SortDesc, SquareArrowUp, UserIcon } from 'lucide-react'
import { Input } from '@/src/components/ui/input'

export default function Page() {
    const [mainGroup, setMainGroup] = useState(() => {
        const storedGroups = localStorage.getItem("mainGroup48");
        return storedGroups ? JSON.parse(storedGroups) : [
            { name: "გიორგი აბუაშვილი", score: 0 },
            { name: "ლიზა ღიბრაძე", score: 0 },
            { name: "ლუკა მეტრეველი", score: 0 },
            { name: "ნათია კიკვაძე", score: 0 },
            { name: "ირაკლი ოზაშვილი", score: 0 },
            { name: "ბექა ბერაია", score: 0 },
            { name: "გიორგი ომანაძე", score: 0 },
            { name: "სანდრო სიუკაშვილი", score: 0 },
            { name: "უმარ აბუბაკაშვილი", score: 0 },
            { name: "გიორგი დათაშვილი", score: 0 },
            { name: "დათო მელიქიძე", score: 0 },
            { name: "თორნიკე ჟუჟნიაშვილიძე", score: 0 },
            { name: "საბა ბეგიაშვილი", score: 0 },
            { name: "ჯაბა ბეგიაშვილი", score: 0 },
            { name: "გიორგი ტლაშაძე", score: 0 },
            { name: "ნიკოლოზ პეტრიაშვილი", score: 0 },
            { name: "აპოლონ ასანიძე", score: 0 },
            { name: "გიორგი მანაშვილი", score: 0 },
            { name: "ცოტნე გულბანი", score: 0 },
            { name: "გიორგი გამლდია", score: 0 }
        ]

    }

    )

    const [groupUpdate, setGroupUpdate] = useState(() => {
        const storedGroups = localStorage.getItem("groupUpdate48");
        return storedGroups ? JSON.parse(storedGroups) : mainGroup;
    })
    useEffect(() => {
        localStorage.setItem('groupUpdate48', JSON.stringify(groupUpdate));
        localStorage.setItem('mainGroup48', JSON.stringify(mainGroup));
    }, [groupUpdate, mainGroup])

    const [value, setValue] = useState('')
    const [studentSort, setStudentSort] = useState(false)

    const handleStudentSort = () => {
        const sortedGroups = [...groupUpdate].sort((a, b) => studentSort ? a.score - b.score : b.score - a.score);
        setGroupUpdate(sortedGroups);
        setStudentSort(!studentSort);
    }
    const handlePlus = ({ index }: { index: number }) => {
        const copyGroup = [...groupUpdate]
        if (copyGroup[index].score < 100 && copyGroup[index].score >= 0) {
            copyGroup[index].score += 5
            setGroupUpdate(copyGroup)
            setMainGroup([...mainGroup])
        }
    }
    const handleMinus = ({ index }: { index: number }) => {
        const copyGroup = [...groupUpdate]
        if (copyGroup[index].score <= 100 && copyGroup[index].score > 5) {
            copyGroup[index].score -= 10
            setGroupUpdate(copyGroup)
        } else {
            copyGroup[index].score = 0
            setGroupUpdate(copyGroup)
        }
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        if (newValue.trim() === '') {
            setGroupUpdate(mainGroup);
        } else {
            const filteredGroups = mainGroup.filter(item => item.name.includes(newValue));
            setGroupUpdate(filteredGroups);
        }
    }

    return (
        <Card className='max-w-[1200px] mx-auto my-4'>
            <Input
                value={value}
                onChange={(e) => handleChange(e)}
                placeholder='Enter Student...'
            />
            <Table>
                <TableHeader >
                    <TableRow >
                        <TableHead className="w-[100px]"> Names</TableHead>
                        <TableHead className="w-[100px]" onClick={() => handleStudentSort()}>
                            <div className='flex cursor-pointer'>
                                <span>Score</span>{studentSort ? <SortDesc /> : <SortAsc />}
                            </div>
                        </TableHead>
                        <TableHead className="w-[100px] text-end"> Acton</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {groupUpdate.map((item, index) => (
                        <TableRow key={`_student-${index}`} className='cursor-pointer'>
                            <TableHead >
                                <div className='flex items-center'>
                                    <UserIcon />
                                    <span>{item.name}</span>
                                </div>
                            </TableHead>
                            <TableHead >
                                <div className='flex items-center'>
                                    <SquareArrowUp className='text-green-500' />
                                    <span>{item.score}</span>
                                </div>
                            </TableHead>
                            <TableHead className='text-end'>
                                <Button onClick={() => handlePlus({ index })} variant={'outline'}><Plus /></Button>
                                <Button onClick={() => handleMinus({ index })}><Minus /></Button>
                            </TableHead>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Card>

    )

}
