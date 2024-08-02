"use client";
import { Button } from "@mantine/core";
import { useRouter } from "next/navigation";
import { IconCaretLeft } from "@tabler/icons-react";

interface Props {
  href?: string;
}

export default function BackButton(props: Props) {
  const router = useRouter();
  return (
    <div>
      <Button
        leftSection={<IconCaretLeft />}
        variant="transparent"
        onClick={() => (props.href ? router.push(props.href) : router.back())}
      >
        Back
      </Button>
    </div>
  );
}
