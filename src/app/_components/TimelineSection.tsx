"use client";
import { Timeline } from "@mantine/core";
import TimelineItem from "./TimelineItem";
import { type Project } from "@/types/Project.type";

interface Props {
  projects: Project[];
}

export default function TimelineSection(props: Props) {
  return (
    <Timeline bulletSize={24}>
      {props.projects.map((project, index) => (
        <TimelineItem key={index} project={project} />
      ))}
    </Timeline>
  );
}
