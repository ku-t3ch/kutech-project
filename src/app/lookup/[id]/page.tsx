/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type PageProps } from ".next/types/app/page";
import { Project } from "@/types/Project.type";
import pb from "@/utils/pb";

export default async function Page(props: PageProps) {
  const record = await pb
    .collection("projects")
    .getOne<Project>(props.params.id as string, {
      expand: "cover",
    });

  console.log(record);

  return <div>adsf</div>;
}
