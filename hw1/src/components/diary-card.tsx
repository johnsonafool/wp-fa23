import * as React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getDate, getTodayDate } from "@/lib/getDate";
import { LabelTag } from "./diary-tag";

type Props = {
  date: string;
};

export function CardWithForm({ date }: Props) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{getDate(date)}</CardTitle>
        <LabelTag />
        <CardDescription className="truncate">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
