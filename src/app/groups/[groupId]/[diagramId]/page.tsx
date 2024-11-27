"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/ui/chart"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/src/components/ui/pagination"
import { useEffect, useState } from "react"
import { Separator } from "@/src/components/ui/separator"

// Define a type for the data structure you're expecting
interface StudentData {
  name: string;
  score: number;
  classwork: number;
  extraProjects: number;
}


const chartConfig = {
  score: {
    label: "Score",
    color: "hsl(var(--chart-1))",
  },
  classwork: {
    label: "Classwork",
    color: "hsl(var(--chart-2))",
  },
  extraProjects: {
    label: "ExtraProjects",
    color: "hsl(var(--chart-3))",
  },
} satisfies ChartConfig

export default function GroupDetails({ params }: { params: { diagramId: string } }) {
  const studentDataString = window.localStorage.getItem(`groupUpdate${params.diagramId}`);

  let studentData: StudentData[] = [];
  if (studentDataString) {
    try {
      studentData = JSON.parse(studentDataString);
    } catch (e) {
      console.error("Error parsing JSON from localStorage:", e);
      studentData = [];
    }
  }

  const [groupRange, setGroupRange] = useState<number[]>([]);
  const [nextPage, setNextPage] = useState(1);

  const lenValue = (window.innerWidth > 850 ? 10 : 5);
  const totalPages = Math.ceil(studentData.length / lenValue);

  useEffect(() => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
    const lastThreePages = pageNumbers.slice(-3);
    const currentRange = pageNumbers.slice(nextPage - 1, nextPage + 2);

    if (lastThreePages.includes(nextPage)) {
      setGroupRange(lastThreePages);
    } else {
      setGroupRange(currentRange);
    }
  }, [nextPage, lenValue, totalPages]);

  const handleNextPage = () => {
    if (nextPage < totalPages) {
      setNextPage(nextPage + 1);
    }
  };

  const handleSlice = () => {
    return studentData.slice((nextPage - 1) * lenValue, nextPage * lenValue);
  };

  return (
    <>
      <Card className="">
        <CardHeader>
          <CardTitle>Goal Oriented Academy auras</CardTitle>
          <CardDescription>{new Date().getDay()}/{new Date().getDate()}/{new Date().getFullYear()}</CardDescription>
        </CardHeader>
        {studentData.map((item, index) => (
          (index >= (nextPage - 1) * lenValue && index < nextPage * lenValue
          ))) &&
          (<CardContent  >
            <ChartContainer className='sm:h-[519px] w-full' config={chartConfig}>
              <BarChart
                barGap={130}
                accessibilityLayer
                data={handleSlice()}
                margin={{
                  top: 20,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="score"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Bar dataKey="score" fill="var(--color-score)" radius={[5, 5, 0, 0]} barSize={50} >
                  <LabelList
                    dataKey={"name"}
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={13}
                  />
                </Bar>
                <Bar dataKey="classwork" fill="var(--color-classwork)" radius={[5, 5, 0, 0]} barSize={50} />
                <Bar dataKey="extraProjects" fill="var(--color-extraProjects)" radius={[5, 5, 0, 0]} barSize={50} />
              </BarChart>
            </ChartContainer>
          </CardContent>
          )}
        <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 font-medium leading-none">
            <span>Aura&apos;s every activity increase by +5</span>  <TrendingUp className="h-4 w-4" />
          </div>
       
          <div className="leading-none text-muted-foreground">
            <p> made by Davit Gdzelisvhili</p>
          </div>
        </CardFooter>
        <Separator />
        <Pagination >
          <PaginationContent className='ml-auto my-2'>
            <PaginationItem >
              <PaginationPrevious onClick={() => nextPage > 1 && setNextPage(nextPage - 1)} />
            </PaginationItem>
            {groupRange.map(item => (
              nextPage == item ?
                (<PaginationItem key={`_page-side-${item}`}>
                  <PaginationLink isActive onClick={() => handleNextPage()}>{item} </PaginationLink>
                </PaginationItem>)
                :
                <PaginationItem key={`_page-side-${item}`}>
                  <PaginationLink onClick={() => handleNextPage()}>{item} </PaginationLink>
                </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationNext onClick={() => handleNextPage()} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </Card>

    </>
  )
}
