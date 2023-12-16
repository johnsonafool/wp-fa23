import { CardWithForm } from "@/components/diary-card";
import { Header } from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const date = "2023.12.1";

  const unixTime = Date.parse(date);

  return (
    <main className="flex min-h-screen flex-col">
      <Header heading="My Diary" />
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center justify-center gap-12 p-8">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index}>
            <Link href={`/d/${unixTime}`}>
              <CardWithForm date={date} />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
