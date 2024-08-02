"use client";
import { Avatar, Text, Timeline } from "@mantine/core";
import { format, formatDistanceToNowStrict } from "date-fns";
import { useRouter } from "next/navigation";
import { type Project } from "@/types/Project.type";
import fileNameToUrl from "@/utils/fileNameToUrl";

interface Props {
  project: Project;
}

export default function TimelineItem(props: Props) {
  const router = useRouter();
  return (
    <Timeline.Item
      className="cursor-pointer hover:bg-gray-100"
      onClick={() => router.push(`/lookup/${props.project.id}`)}
      title={props.project.name}
    >
      <Text c="dimmed" size="sm" lineClamp={3}>
        {props.project.description}
      </Text>
      <div className="flex gap-2">
        <Text size="xs" mt={4} lineClamp={3}>
          {props.project.release}
        </Text>
        {props.project.release && (
          <Text size="xs" mt={4} lineClamp={3}>
            {formatDistanceToNowStrict(new Date(props.project.release))}
          </Text>
        )}
      </div>
    </Timeline.Item>
  );
}
