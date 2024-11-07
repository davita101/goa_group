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

// Define a type for the data structure you're expecting
interface StudentData {
  name: string;
  score: number;
}


const chartConfig = {
  student: {
    color: `hsl(var(--chart-1))`,
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
      studentData = []
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Goal Oriented Academy auras</CardTitle>
        <CardDescription>{new Date().getDay()}/{new Date().getDate()}/{new Date().getFullYear()}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            barGap={1500}
            accessibilityLayer
            data={studentData}
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
            <Bar dataKey="score" fill="gray" radius={8} barSize={10} >
              <LabelList
                dataKey={"name"}
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Aura&apos;s every activity increase by +5  <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          made by Davit Gdzelisvhili
        </div>
      </CardFooter>
    </Card>
  )
}
