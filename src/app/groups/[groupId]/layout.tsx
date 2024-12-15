"use client"
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import DownloadData from "@/src/components/util/DownloadData";
import { ArrowLeft, ChartBar, HomeIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { groupId: string } }) {
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    setIsTrue(window.location.pathname === `/groups/${params.groupId}/${params.groupId}`);
  }, [params.groupId]);

  return (
    <section className='max-w-[1200px] mx-auto'>
      <Card className="flex justify-between my-2 p-2">
        <div className="space-x-2">
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
            onClick={() => setIsTrue(false)}
            href={`/groups/${params.groupId}`}>
            <Button
              variant={`${!isTrue ? "default" : "ghost"}`}
            >
              <HomeIcon />
            </Button>
          </Link>
          <Link
            onClick={() => setIsTrue(true)}
            href={`/groups/${params.groupId}/${params.groupId}`}
          >
            <Button variant={`${isTrue ? "default" : "ghost"}`}>
              <ChartBar />
            </Button>
          </Link>
        </div>
        <DownloadData data={`groupUpdate${params.groupId}`} />
      </Card>
      {children}
    </section>
  );
}