"use client"
import TableComponent from "@/src/components/TableComponent"
import { groupObject } from "../../constants/groupObject"

export default function GroupDetails({ params }: { params: { groupId: string } }) {
  const groupData = groupObject[Number(params.groupId)];

  const normalizedGroupData = groupData?.map(item => ({
    ...item,
    score: typeof item.score === 'string' ? parseFloat(item.score) : item.score,
  })) || [];

  return (
    <div>
      <TableComponent arr={normalizedGroupData} urlId={params.groupId} />
    </div>
  );
}
