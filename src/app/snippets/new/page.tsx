import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/database";
import { redirect } from "next/navigation";
import React from "react";

const CreateSnippetPage = () => {
  const createSnippet = async (formData: FormData) => {
    "use server";

    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    try {
      const snippet = await db.snippet.create({
        data: {
          title,
          code,
        },
      });
      console.log(snippet, " saved success");
    } catch (error) {
      console.error(error);
    } finally {
      redirect("/");
    }
  };

  return (
    <div className="h-screen flex-1 flex justify-center items-center bg-slate-200">
      <form
        action={createSnippet}
        className="flex flex-col w-96 items-center justify-center "
      >
        <h3 className="font-bold text-xl">Create a snippet</h3>
        <Input name="title" placeholder="Title" className="mt-5 " />
        <Input name="code" placeholder="Code" className="mt-2" />
        <Button className="mt-2" variant={"default"}>
          Add
        </Button>
      </form>
    </div>
  );
};

export default CreateSnippetPage;
