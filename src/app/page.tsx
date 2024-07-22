import TimelineSection from "./_components/TimelineSection";
import { HydrateClient } from "@/trpc/server";
import { type Project } from "@/types/Project.type";
import pb from "@/utils/pb";

export default async function Home() {
  const resultList = await pb.collection("projects").getList<Project>(1, 50, {
    expand: "cover",
    sort: "-time",
  });

  return (
    <HydrateClient>
      <div className="flex min-h-screen justify-center py-10 px-5">
        <TimelineSection projects={resultList.items} />
      </div>
    </HydrateClient>
  );
}
