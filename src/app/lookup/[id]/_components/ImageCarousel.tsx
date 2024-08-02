"use client";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

interface Props {
  url: string[];
}

export default function ImageCarousel(props: Props) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Carousel slideSize="100%" slideGap="md" withIndicators height={isMobile ? 300 :500}>
      {props.url.map((url) => (
        <Carousel.Slide key={url}>
          <img
            className="h-full w-full rounded-lg object-contain object-center"
            src={url + "?download"}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
