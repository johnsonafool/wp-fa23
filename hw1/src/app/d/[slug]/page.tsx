import { EditButton } from "@/components/edit-button";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { unixTimeToDate } from "@/lib/getDate";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const unixTime = parseInt(params.slug, 10);

  return (
    <div className="flex min-h-screen flex-col">
      <Header heading="My Diary">
        <div className="ml-auto">{unixTimeToDate(unixTime)}</div>
      </Header>
      <div className="flex flex-row items-center justify-center p-32 gap-16">
        <div className="w-[300px]">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        </div>
        <div className="flex flex-col gap-4">
          <Image
            src="https://source.unsplash.com/random"
            alt="Picture of the author"
            width={500}
            height={500}
            className="w-[500px] h-[300px] object-cover"
          />

          <EditButton />
        </div>
      </div>
    </div>
  );
}
