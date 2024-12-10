"use client"
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Card } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import { LucideAArrowDown, Minus, Plus, ProjectorIcon, SortAsc, SortDesc, SquareArrowUp, Table2, UserIcon } from 'lucide-react'
import { Input } from '@/src/components/ui/input'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'
import { Separator } from './ui/separator'
interface Student {
    name: string;
    score: number;
    classwork: number;
    extraProjects: number;
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

    const [skipLesson] = useState<Student[]>(() => {
        if (typeof window !== "undefined") {
            const storedGroups = localStorage.getItem(`groupSkipLesson${urlId}`);
            return storedGroups ? JSON.parse(storedGroups) : [];
        }
        return [];
    });
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

    const handlePlus = ({ index, value }: { index: number, value: keyof Student }) => {
        const copyGroup = [...groupUpdate]
        if (copyGroup[index][value] as number >= 0) {
            (copyGroup[index][value] as number) += 5
            if (value !== "score") {
                copyGroup[index][`score`] += 5;
            }
            setGroupUpdate(copyGroup)
        }

    }
    const handleMinus = ({ index, value }: { index: number, value: keyof Student }) => {
        const copyGroup = [...groupUpdate]

        if ((copyGroup[index][value] as number) > 5) {
            (copyGroup[index][value] as number) -= 10


            if (value !== "score") {
                copyGroup[index][`score`] -= 10;
            }

            setGroupUpdate(copyGroup)
        } else {
            (copyGroup[index][value] as number) = 0
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
        // const classValue = groupUpdate[index].classwork;
        let colorClass = 'text-red-500';

        if ((score <= 50)) {
            colorClass = 'text-yellow-500';
        } else if (score >= 120 && score < 200) {
            colorClass = 'text-purple-500'
        } else if (score >= 200 && score < 300) {
            colorClass = 'text-blue-500'
        } else if (score >= 300 && score < 400) {
            colorClass = 'text-gray-500'
        }

        else {
            colorClass = 'text-green-500'
        }

        return colorClass;
    }
    return (
        <div >
            <Card >
                <Input
                    value={value}
                    onChange={(e) => handleChange(e)}
                    placeholder='Enter Student...'
                />
                <Table>
                    <TableHeader>
                        <TableRow >
                            <TableHead className="w-[100px]">
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <LucideAArrowDown /> <span>Names</span>
                                </div>
                            </TableHead>
                            <TableHead className="w-[100px]" onClick={() => handleStudentSort()}>
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <span>Score</span>{studentSort ? <SortDesc /> : <SortAsc />}
                                </div>
                            </TableHead>
                            <TableHead className="w-[100px]">
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <Table2 />
                                    <span>Classwork</span>
                                </div>
                            </TableHead>
                            <TableHead className="w-[100px]">
                                <div className='flex items-center gap-2 cursor-pointer '>
                                    <ProjectorIcon />
                                    <span>project</span>
                                </div>
                            </TableHead>

                        </TableRow>
                    </TableHeader>
                    <TableBody >
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
                                <TableHead className='text-end '>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex text-end gap-1 items-center '>
                                            <SquareArrowUp className={`${handleColorSwitcher({ index })}`} />
                                            <span>{item.score}</span>
                                        </div>
                                    </div>
                                </TableHead>
                                <TableHead className='text-end '>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex text-end gap-1 items-center '>
                                            <SquareArrowUp className={`${handleColorSwitcher({ index })}`} />
                                            <span>{item.classwork}</span>
                                        </div>
                                        <div>
                                            <Button onClick={() => handlePlus({ index, value: "classwork" })} variant={'outline'}><Plus /></Button>
                                            <Button onClick={() => handleMinus({ index, value: "classwork" })}><Minus /></Button>
                                        </div>
                                    </div>
                                </TableHead>

                                <TableHead className='text-end '>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex text-end gap-1 items-center '>
                                            <SquareArrowUp className={`${handleColorSwitcher({ index })}`} />
                                            <span>{item.extraProjects}</span>
                                        </div>
                                        <div>
                                            <Button onClick={() => handlePlus({ index, value: "extraProjects" })} variant={'outline'}><Plus /></Button>
                                            <Button onClick={() => handleMinus({ index, value: "extraProjects" })}><Minus /></Button>
                                        </div>
                                    </div>
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
        </div>
    )

}
