import React from 'react'
import { Table, TableBody, TableHead, TableHeader, TableRow } from './ui/table'
import Link from 'next/link'
import { Card } from './ui/card'

export default function GroupTable() {
  const groups = [
    {
      label: "06",
      route: "/group06"
    },
    {
      label: "38",
      route: "/group38"
    },
  
    {
      label: "47",
      route: "/group47"
    },
    {
      label: "48",
      route: "/group48"
    }
  ]
  return (
    <div className='px-4'>
      <Card className='max-w-[1200px] mx-auto'>
        <Table>
          <TableHeader >
            <TableRow >
              <TableHead className="w-[100px]"><b>Goal-Oriented-Academy</b> Groups</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.map((item, index) => (
              <TableRow key={`_student-${index}`} className='cursor-pointer'>
                <Link href={item.route}>
                  <TableHead className='w-[100vw]'><b>{item.label}</b></TableHead>
                </Link>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
