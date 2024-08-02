import { readItems } from "@directus/sdk";
import { unstable_noStore } from "next/cache";
import TimelineSection from "./_components/TimelineSection";
import { HydrateClient } from "@/trpc/server";
import { type Project } from "@/types/Project.type";
import directusClient from "@/utils/directus";

export default async function Home() {
  unstable_noStore();
  const result = await directusClient.request<Project[]>(
    readItems("project", {
      fields: ["*"],
      sort: ["-release"]
    }),
  );

  return (
    <HydrateClient>
      <div className="min-h-screen max-w-7xl mx-auto py-10 px-3">
        <TimelineSection projects={result} />
      </div>
    </HydrateClient>
  );
}
