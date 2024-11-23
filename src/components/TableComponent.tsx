"use client"
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Card } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import { Minus, Plus, SortAsc, SortDesc, SquareArrowUp, UserIcon } from 'lucide-react'
import { Input } from '@/src/components/ui/input'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'
import { Separator } from './ui/separator'
interface Student {
    name: string;
    score: number;
}
interface TableComponentProps {
    arr: Student[];
    urlId: string;
}

export default function TableComponent({ arr, urlId }: TableComponentProps) {
    const [groupUpdate, setGroupUpdate] = useState<Student[]>(() => {
        if (typeof window !== "undefined") {
            const storedGroups = localStorage.getItem(`groupUpdate${urlId}`);
            return storedGroups ? JSON.parse(storedGroups) : arr;
        }
        return arr;
    });

    const [skipLesson, setSkipLesson] = useState<Student[]>(() => {
        if (typeof window !== "undefined") {
            const storedGroups = localStorage.getItem(`groupSkipLesson${urlId}`);
            return storedGroups ? JSON.parse(storedGroups) : [];
        }
        return []; // Fallback during SSR
    });
    // Synchronizing localStorage with state changes
    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(`groupUpdate${urlId}`, JSON.stringify(groupUpdate));
            localStorage.setItem(`groupSkipLesson${urlId}`, JSON.stringify(skipLesson));
        }
    }, [groupUpdate, skipLesson, urlId]);

    const [value, setValue] = useState('')
    const [studentSort, setStudentSort] = useState(false)
    const [nexPage, setNextPage] = useState(1)

    const groupRange = Array.from({ length: Math.ceil(arr.length / 15) }, (_, i) => i + 1)
    const handleNextPage = ({ item }: { item: number }) => {
        setNextPage(item)
    }
    const handleStudentSort = () => {
        const sortedGroups = [...groupUpdate].sort((a, b) => studentSort ? a.score - b.score : b.score - a.score);
        setGroupUpdate(sortedGroups);
        setStudentSort(!studentSort);
    }
    const handlePlus = ({ index }: { index: number }) => {
        const copyGroup = [...groupUpdate]
        if (copyGroup[index].score >= 0) {
            copyGroup[index].score += 5
            setGroupUpdate(copyGroup)
        }
    }
    const handleMinus = ({ index }: { index: number }) => {
        const copyGroup = [...groupUpdate]
        if (copyGroup[index].score > 5) {
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
            setGroupUpdate(arr);
        } else {
            const filteredGroups = arr.filter(item => item.name.includes(newValue));
            setGroupUpdate(filteredGroups);
        }
    }
    const handleColorSwitcher = ({ index }: { index: number }) => {
        const score = groupUpdate[index].score;
        let colorClass = 'text-red-500';

        if (score < 50) {
            colorClass = 'text-red-300';
        } else if (score >= 50 && score < 80) {
            colorClass = 'text-yellow-500';
        }else if (score >= 120 && score < 200){
            colorClass = 'text-purple-500'
        } else if (score >= 200 && score < 300){
            colorClass = 'text-blue-500'
        }
        else {
            colorClass = 'text-green-500'
        }

        return colorClass;
    }
    return (
        <div>
            <Card>
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
                            <TableHead className="w-[100px] text-end"> Action</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {groupUpdate.map((item, index) => (
                            (index >= (nexPage - 1) * 15 && index < nexPage * 15
                            ) &&

                            (<TableRow key={`_student-${index}`} className='cursor-pointer'>
                                <TableHead >
                                    <div className='flex items-center'>
                                        <UserIcon />
                                        <span>{item.name}</span>
                                    </div>
                                </TableHead>
                                <TableHead >
                                    <div className='flex items-center  yel'>
                                        <SquareArrowUp className={`${handleColorSwitcher({ index })}`} />
                                        <span>{item.score}</span>
                                    </div>
                                </TableHead>
                                <TableHead className='text-end '>
                                    
                                    <Button onClick={() => handlePlus({ index })} variant={'outline'}><Plus /></Button>
                                    <Button onClick={() => handleMinus({ index })}><Minus /></Button>
                                </TableHead>
                            </TableRow>)
                        ))}
                    </TableBody>
                </Table>
                <Separator className='my-2' />
                <Pagination >
                    <PaginationContent className='ml-auto my-2'>
                        <PaginationItem >
                            <PaginationPrevious onClick={() => nexPage > 1 && setNextPage(nexPage - 1)} />
                        </PaginationItem>
                        {groupRange.map(item => (
                            nexPage == item ?
                                (<PaginationItem key={`_page-side-${item}`}>
                                    <PaginationLink isActive onClick={() => handleNextPage({ item })}>{item} </PaginationLink>
                                </PaginationItem>)
                                :
                                <PaginationItem key={`_page-side-${item}`}>
                                    <PaginationLink onClick={() => handleNextPage({ item })}>{item} </PaginationLink>
                                </PaginationItem>
                        ))}
                        <PaginationItem>
                            <PaginationNext onClick={() => nexPage < groupRange.length && setNextPage(nexPage + 1)} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </Card>
            <br />
            {skipLesson.length > 0 && (
                <Card>
                    {
                        <Table>
                            <TableHeader >
                                <TableRow >
                                    <TableHead className="w-full"> Names</TableHead>
                                    <TableHead className="w-[100px] text-end">
                                        <Button variant={"destructive"} onClick={() => setSkipLesson([])}>Remove all</Button>
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {skipLesson.map((item, index) => (
                                    (index >= (nexPage - 1) * 15 && index < nexPage * 15
                                    ) &&

                                    (<TableRow key={`_student-${index}`} className='cursor-pointer'>
                                        <TableHead >
                                            <div className='flex items-center'>
                                                <UserIcon />
                                                <span>{item.name}</span>
                                            </div>
                                        </TableHead>
                                    </TableRow>)
                                ))}
                            </TableBody>
                        </Table>
                    }
                </Card>)}
        </div>
    )

}
