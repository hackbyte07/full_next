import { db } from "@/database";
import { notFound } from "next/navigation";
import React from "react";

type SnippetProps = {
  params: {
    id: string;
  };
};

const page = async (props: SnippetProps) => {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) return notFound();

  return <div></div>;
};

export default page;
