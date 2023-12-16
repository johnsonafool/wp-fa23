"use client";

import { useState } from "react";
import { Button } from "./ui/button";

export function EditButton() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-row gap-4">
      {!isEditing ? (
        <Button variant={"outline"} onClick={() => setIsEditing(true)}>
          Edit
        </Button>
      ) : (
        <>
          <Button variant={"outline"} onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
          <Button variant={"outline"} onClick={() => {}}>
            Save
          </Button>
        </>
      )}
    </div>
  );
}
