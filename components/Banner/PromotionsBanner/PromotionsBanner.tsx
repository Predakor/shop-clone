"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { dummyPromotions } from "@/lib/dummyData";
import { useMediaQuery } from "react-responsive";
import Banner from "../Banner";

type Props = {};

function PromotionsBanner({}: Props) {
  const isMobile = useMediaQuery({
    maxWidth: 1024,
  });

  return (
    <Carousel>
      <CarouselContent>
        {dummyPromotions.map((promotion) => (
          <CarouselItem key={promotion.name}>
            <Banner occasion={promotion} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />

      <div className="flex w-full justify-center gap-4 p-2 text-xs">
        {dummyPromotions.map((promotion) => (
          <p key={promotion.name}>{isMobile ? "o" : promotion.name}</p>
        ))}
      </div>
    </Carousel>
  );
}

export default PromotionsBanner;
