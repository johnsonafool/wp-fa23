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
import { Button } from "./ui/button";

export function LabelTag() {
  return (
    <div>
      <Button className="bg-blue-400 hover:bg-blue-400">Button</Button>
    </div>
  );
}

export function MoodTag() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{getDate("2023.12.12")}</CardTitle>
        <CardDescription className="truncate">
          {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. `}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
