"use client"
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/src/components/ui/table"
import { Card } from '@/src/components/ui/card'
import { Button } from '@/src/components/ui/button'
import { CameraIcon, HelpCircleIcon, LucideAArrowDown, Minus, Plus, Podcast, ProjectorIcon, SortAsc, SortDesc, SquareArrowUp, SwatchBook, Table2, UserIcon } from 'lucide-react'
import { Input } from '@/src/components/ui/input'
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from './ui/pagination'
import { Separator } from './ui/separator'
interface Student {
    name: string
    studentAttend: number
    help: number
    cameraOn: number
    answers: number
    score: number
    classwork: number
    extraProjects: number
}
interface TableComponentProps {
    arr: Student[]
    urlId: string
}

export default function TableComponent({ arr, urlId }: TableComponentProps) {
    const [groupUpdate, setGroupUpdate] = useState<Student[]>(() => {
        if (typeof window !== "undefined") {
            const storedGroups = localStorage.getItem(`groupUpdate${urlId}`)
            if (storedGroups) {
                return JSON.parse(storedGroups)
            }
        }
        return arr
    })

    useEffect(() => {
        if (typeof window !== "undefined") {
            localStorage.setItem(`groupUpdate${urlId}`, JSON.stringify(groupUpdate))
        }
        localStorage.setItem(`groupAllUpdate${urlId}`, JSON.stringify(arr))
    }, [groupUpdate, urlId])
    useEffect(() => {
        const handleBeforeUnload = (event: BeforeUnloadEvent) => {
            event.preventDefault()
            event.returnValue = ''
            alert('Are you sure you want to reload?')
        }

        window.addEventListener('beforeunload', handleBeforeUnload)

        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [])
    const [value, setValue] = useState('')
    const [studentSort, _] = useState(false)
    const [nexPage, setNextPage] = useState(1)

    const groupRange = Array.from({ length: Math.ceil(arr.length / 15) }, (_, i) => i + 1)
    const handleNextPage = ({ item }: { item: number }) => {
        setNextPage(item)
    }
    const handleStudentSort = () => {
        const sortedGroups = [...groupUpdate].sort((a, b) => studentSort ? a.score - b.score : b.score - a.score)
        setGroupUpdate(sortedGroups)
    }

    const handlePlus = ({ index, value }: { index: number, value: keyof Student }) => {
        const copyGroup = [...groupUpdate]
        if (copyGroup[index][value] as number >= 0) {
            (copyGroup[index][value] as number) += 5
            if (value !== "score") {
                copyGroup[index][`score`] += 5
            }
            const sortedGroups = [...copyGroup].sort((a, b) => b.score - a.score)
            setGroupUpdate(sortedGroups)
        }
    }

    const handleMinus = ({ index, value }: { index: number, value: keyof Student }) => {
        const copyGroup = [...groupUpdate]
        if ((copyGroup[index][value] as number) > 5) {
            (copyGroup[index][value] as number) -= 10
            if (value !== "score") {
                copyGroup[index][`score`] -= 10
            }
            const sortedGroups = [...copyGroup].sort((a, b) => b.score - a.score)
            setGroupUpdate(sortedGroups)
        } else {
            (copyGroup[index][value] as number) = 0
            const sortedGroups = [...copyGroup].sort((a, b) => b.score - a.score)
            setGroupUpdate(sortedGroups)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValue(newValue)
        if (newValue.trim() === '') {
            const sortedGroups = [...arr].sort((a, b) => b.score - a.score)
            setGroupUpdate(sortedGroups)
        } else {
            const filteredGroups = groupUpdate.filter(item => item.name.includes(newValue))
            // const sortedGroups = [...groupUpdate].sort((a, b) => studentSort ? a.score - b.score : b.score - a.score)
            // setGroupUpdate(sortedGroups)
            setGroupUpdate(filteredGroups)
        }
    }
    const handleColorSwitcher = ({ index }: { index: number }) => {
        const score = groupUpdate[index].score
        // const classValue = groupUpdate[index].classwork
        let colorClass = 'text-red-500'

        if ((score <= 50)) {
            colorClass = 'text-yellow-500'
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

        return colorClass
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
                    <TableHeader>
                        <TableRow>
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
                                    <span>Project</span>
                                </div>
                            </TableHead>
                            <TableHead className="w-[100px]">
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <span>Attendance</span>
                                    <SwatchBook />
                                </div>
                            </TableHead>
                            <TableHead className="w-[100px]">
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <span>Help</span>
                                    <HelpCircleIcon />
                                </div>
                            </TableHead>
                            <TableHead className="w-[100px]">
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <span>Camera On</span>
                                    <CameraIcon />
                                </div>
                            </TableHead>
                            <TableHead className="w-[100px]">
                                <div className='flex items-center gap-2 cursor-pointer'>
                                    <span>Answers</span>
                                    <Podcast /> 
                                </div>
                            </TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {groupUpdate.map((item, index) => (
                            (index >= (nexPage - 1) * 15 && index < nexPage * 15) && (
                                <TableRow key={`_student-${index}`} className='cursor-pointer'>
                                    <TableHead>
                                        <div className='flex items-center'>
                                            <UserIcon />
                                            <span>{item.name}</span>
                                        </div>
                                    </TableHead>
                                    <TableHead className='text-end'>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex text-end gap-1 items-center'>
                                                <SquareArrowUp className={`${handleColorSwitcher({ index })}`} />
                                                <span>{item.score}</span>
                                            </div>
                                        </div>
                                    </TableHead>
                                    <TableHead className='text-end'>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex text-end gap-1 items-center'>
                                                <span>{item.classwork}</span>
                                            </div>
                                            <div>
                                                <Button className='p-2' onClick={() => handlePlus({ index, value: "classwork" })} variant={'outline'}><Plus /></Button>
                                                <Button className='p-2' onClick={() => handleMinus({ index, value: "classwork" })}><Minus /></Button>
                                            </div>
                                        </div>
                                    </TableHead>
                                    <TableHead className='text-end'>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex text-end gap-1 items-center'>
                                                <span>{item.extraProjects}</span>
                                            </div>
                                            <div>
                                                <Button className='p-2' onClick={() => handlePlus({ index, value: "extraProjects" })} variant={'outline'}><Plus /></Button>
                                                <Button className='p-2' onClick={() => handleMinus({ index, value: "extraProjects" })}><Minus /></Button>
                                            </div>
                                        </div>
                                    </TableHead>
                                    <TableHead className='text-end'>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex text-end gap-1 items-center'>
                                                <span>{item.studentAttend}</span>
                                            </div>
                                            <div>
                                                <Button className='p-2' onClick={() => handlePlus({ index, value: "studentAttend" })} variant={'outline'}><Plus /></Button>
                                                <Button className='p-2' onClick={() => handleMinus({ index, value: "studentAttend" })}><Minus /></Button>
                                            </div>
                                        </div>
                                    </TableHead>
                                    <TableHead className='text-end'>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex text-end gap-1 items-center'>
                                                <span>{item.help}</span>
                                            </div>
                                            <div>
                                                <Button className='p-2' onClick={() => handlePlus({ index, value: "help" })} variant={'outline'}><Plus /></Button>
                                                <Button className='p-2' onClick={() => handleMinus({ index, value: "help" })}><Minus /></Button>
                                            </div>
                                        </div>
                                    </TableHead>
                                    <TableHead className='text-end'>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex text-end gap-1 items-center'>
                                                <span>{item.cameraOn}</span>
                                            </div>
                                            <div>
                                                <Button className='p-2' onClick={() => handlePlus({ index, value: "cameraOn" })} variant={'outline'}><Plus /></Button>
                                                <Button className='p-2' onClick={() => handleMinus({ index, value: "cameraOn" })}><Minus /></Button>
                                            </div>
                                        </div>
                                    </TableHead>
                                    <TableHead className='text-end'>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex text-end gap-1 items-center'>
                                                <span>{item.answers}</span>
                                            </div>
                                            <div>
                                                <Button className='p-2' onClick={() => handlePlus({ index, value: "answers" })} variant={'outline'}><Plus /></Button>
                                                <Button className='p-2' onClick={() => handleMinus({ index, value: "answers" })}><Minus /></Button>
                                            </div>
                                        </div>
                                    </TableHead>
                                </TableRow>
                            )
                        ))}
                    </TableBody>
                </Table>
                <Separator className='my-2' />
                <Pagination>
                    <PaginationContent className='ml-auto my-2'>
                        <PaginationItem>
                            <PaginationPrevious onClick={() => nexPage > 1 && setNextPage(nexPage - 1)} />
                        </PaginationItem>
                        {groupRange.map(item => (
                            nexPage === item ? (
                                <PaginationItem key={`_page-side-${item}`}>
                                    <PaginationLink isActive onClick={() => handleNextPage({ item })}>{item}</PaginationLink>
                                </PaginationItem>
                            ) : (
                                <PaginationItem key={`_page-side-${item}`}>
                                    <PaginationLink onClick={() => handleNextPage({ item })}>{item}</PaginationLink>
                                </PaginationItem>
                            )
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
