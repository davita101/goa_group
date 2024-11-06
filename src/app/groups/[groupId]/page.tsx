"use client"
import TableComponent from "@/src/components/TableComponent"
import { groupObject } from "../../constants/groupObject"
 
export default function GroupDetails({ params }: { params: { groupId: string } }) {
  return (
    <div>
      <TableComponent arr={groupObject[Number(params.groupId)]} urlId={params.groupId} />
    </div>
  )
}
