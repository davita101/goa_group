"use client"
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { ArrowLeft, ChartBar, HomeIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { groupId: string } }) {

  const [isTrue, setIsTrue] = useState(window.location.pathname == `/groups/${params.groupId}/${params.groupId}` ? true : false);
  return (
    <section className='max-w-[1200px] mx-auto'>
      <Card className="flex gap-2 my-2 p-2">
        <Link
          onClick={() => setIsTrue(false)}
          href={`/groups/`}>
          <Button
            variant={`outline`}
          >
            <ArrowLeft />
          </Button>
        </Link>
        <Link
          onClick={() => setIsTrue(!isTrue)}
          href={`/groups/${params.groupId}`}>
          <Button
            variant={`${!isTrue ? "default" : "ghost"}`}
          >
            <HomeIcon />
          </Button>
        </Link>
        <Link
          onClick={() => setIsTrue(!isTrue)}
          href={`/groups/${params.groupId}/${params.groupId}`}
        >
          <Button variant={`${isTrue ? "default" : "ghost"}`}>
            <ChartBar />
          </Button>
        </Link>
      </Card>
      {children}
    </section>
  );
}
