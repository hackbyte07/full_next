import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { db } from "@/database";
import Image from "next/image";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  
  return (
    <div className="h-screen flex flex-1 flex-col justify-center items-center">
      {snippets?.map((it) => (
        <Card key={it.id} className="mt-2">
          <CardHeader>
            <CardTitle className="mt-2">{it.title}</CardTitle>
            <CardDescription className="mt-2">{it.code}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}
