/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { readItem, readItems } from "@directus/sdk";
import { Text } from "@mantine/core";
import { unstable_noStore } from "next/cache";
import ImageCarousel from "./_components/ImageCarousel";
import { type PageProps } from ".next/types/app/page";
import { type Project } from "@/types/Project.type";
import directusClient from "@/utils/directus";
import BackButton from "@/app/_components/BackButton";

export default async function Page(props: PageProps) {
  unstable_noStore();
  if (!props.params.id) return null;
  //   images: [ 1, 2, 3, 4, 5 ]
  const result = await directusClient.request<Project>(
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    readItem("project", props.params.id, {
      deep: {
        images: true,
      },
    }),
  );

  interface ProjectFile {
    id: number;
    project_id: string;
    directus_files_id: string;
  }

  const images = await directusClient.request<ProjectFile[]>(
    readItems("project_files", {
      filter: {
        project_id: {
          _eq: props.params.id,
        },
      },
    }),
  );

  return (
    <div className="mx-auto min-h-screen w-full max-w-7xl py-10">
      <div className="flex flex-col gap-3">
        <BackButton />
        <div className="flex flex-col gap-3 px-5">
          <ImageCarousel
            url={images.map(
              (image) =>
                `https://tech.nisit.ku.ac.th/cms/assets/${image.directus_files_id}`,
            )}
          />
          <Text size="xl">{result.name}</Text>
          <Text size="lg">{result.description}</Text>
        </div>
      </div>
    </div>
  );
}
