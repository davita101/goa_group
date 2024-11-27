import React from 'react'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow
} from '@/src/components/ui/table'
import Link from 'next/link'
import { Card } from '@/src/components/ui/card'

export default function GroupTable () {
  const groups = [
    {
      label: '05',
      route: '/groups/0'
    },

    {
      label: '06',
      route: '/groups/1'
    },

    {
      label: '38',
      route: '/groups/2'
    },
    {
      label: '47',
      route: '/groups/3'
    },
    {
      label: '48',
      route: '/groups/4'
    }
  ]
  return (
    <div >
      <Card className='max-w-[1200px] mx-auto my-2'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[100px]'>
                <b>Goal-Oriented-Academy</b> Groups
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {groups.map((item, index) => (
              <TableRow key={`_student-${index}`} className='cursor-pointer'>
                <Link href={item.route}>
                  <TableHead className='w-[100vw]'>
                    <b>{item.label}</b>
                  </TableHead>
                </Link>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}
