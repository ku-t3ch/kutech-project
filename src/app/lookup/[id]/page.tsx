/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { readItem } from "@directus/sdk";
import { type PageProps } from ".next/types/app/page";
import { type Project } from "@/types/Project.type";
import directusClient from "@/utils/directus";

export default async function Page(props: PageProps) {
  const result = await directusClient.request<Project>(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    readItem("project", props.params.id ?? ""),
  );

  console.log(result);

  return <div>adsf</div>;
}
