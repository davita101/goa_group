"use client"
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Card, CardTitle } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import { Minus, Plus, SortAsc, SortDesc, SquareArrowUp, UserIcon } from 'lucide-react'
import { Input } from '@/src/components/ui/input'
import { BreadcrumbDemo } from '@/src/components/Breadcrumb'

export default function Page() {
    const [mainGroup, setMainGroup] = useState(() => {
        const storedGroups = localStorage.getItem("mainGroup");
        return storedGroups ? JSON.parse(storedGroups) : [
            { name: "გიორგი გურიელი", score: 0 },
            { name: "ლადო ნიჟარაძე", score: 0 },
            { name: "ელენე გაფრინდაშვილი", score: 0 },
            { name: "ლუკა სურმანიძე", score: 0 },
            { name: "გიორგი კოსტავა", score: 0 },
            { name: "ნიკა ბლიაძე", score: 0 },
            { name: "რომან მაღრაძე", score: 0 },
            { name: "ლუკა შუკვანი", score: 0 },
            { name: "დავით ქარაქუსოვი", score: 0 },
            { name: "გიორგი ქრისტესიაშვილი", score: 0 },
            { name: "ლუკა ფიფია", score: 0 },
            { name: "გელუკა გენებაშვილი", score: 0 },
            { name: "ნიკა მალაყმაძე", score: 0 },
            { name: "ანა კაპანაძე", score: 0 },
            { name: "ნიკოლოზ ქათამაძე", score: 0 },
            { name: "გაბო დუმბაძე", score: 0 },
            { name: "ანდრია ცაცუა", score: 0 },
            { name: "ნიკა მაღლაფერიძე", score: 0 },
            { name: "პაატა ცუცქირიძე", score: 0 },
            { name: "თორნიკე მღებლიშვილი", score: 0 },
            { name: "რეზი ხარებავა", score: 0 },
            { name: "გურამ გელხაური", score: 0 },
            { name: "გიოტგი უძილაური", score: 0 },
            { name: "ნიკოლოზ ანთაძე", score: 0 },
            { name: "გიორგი ჩიღვინაძე", score: 0 },
            { name: "დავით ლიპარტელიანი", score: 0 },
            { name: "ლუკა კელეპტრიშვილი", score: 0 },
            { name: "ლუკა პიტნავა", score: 0 },
            { name: "ნიკოლოზ მელიჯანაშვილი", score: 0 },
            { name: "ლუკა ოყროშიძე", score: 0 },
            { name: "ლუკა სუარიშვილი", score: 0 },
            { name: "საბა ლაცაბიძე", score: 0 },
            { name: "ნინო ზარდიაშვილი", score: 0 },
            { name: "ზურა დავითაძე", score: 0 },
            { name: "ბარბარე შარიქაძე", score: 0 },
            { name: "ლუკა ტოკლიკიშვილი", score: 0 },
            { name: "დავით ბერკაცაშვილი", score: 0 },
        ]
    }

    )

    const [groupUpdate, setGroupUpdate] = useState(() => {
        const storedGroups = localStorage.getItem("groupUpdate");
        return storedGroups ? JSON.parse(storedGroups) : mainGroup;
    })
    useEffect(() => {
        localStorage.setItem('groupUpdate', JSON.stringify(groupUpdate));
        localStorage.setItem('mainGroup', JSON.stringify(mainGroup));
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
