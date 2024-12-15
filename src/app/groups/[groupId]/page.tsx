"use client"
import TableComponent from "@/src/components/TableComponent"
import { groupObject } from "../../constants/groupObject"

interface Student {
  name: string;
  studentAttend: number;
  help: number;
  cameraOn: number;
  answers: number;
  score: number;
  classwork: number;
  extraProjects: number;
}

export default function GroupDetails({ params }: { params: { groupId: string } }) {
  const groupData: (Student | { name: string; score: number; classwork: number; extraProjects: number; })[] = groupObject[Number(params.groupId)];

  const normalizedGroupData: Student[] = groupData?.map(item => ({
    name: item.name,
    score: typeof item.score === 'string' ? parseFloat(item.score) : item.score,
    studentAttend: 'studentAttend' in item ? item.studentAttend : 0,
    help: 'help' in item ? item.help : 0,
    cameraOn: 'cameraOn' in item ? item.cameraOn : 0,
    answers: 'answers' in item ? item.answers : 0,
    classwork: item.classwork,
    extraProjects: item.extraProjects,
  })) || [];

  return (
    <div>
      <TableComponent arr={normalizedGroupData} urlId={params.groupId} />
    </div>
  );
}