"use client";
import { dummyPromotions } from "@/lib/dummyData";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import useIsMobile from "@/hooks/useIsMobile";

type Props = {};

function CurrentPromotions({}: Props) {
  const isMobile = useIsMobile();
  return (
    <section className="flex w-full flex-col gap-8">
      <div>
        <h2 className="text-2xl font-bold lg:text-3xl">Promotions</h2>
        <p className="text-sm text-muted-foreground">
          Check what we have in store for you
        </p>
      </div>

      <div className="grid w-full gap-6 lg:grid-cols-8 lg:grid-rows-2">
        <Carousel className="lg:col-span-5 lg:row-span-full">
          <CarouselContent className="w-screen lg:w-auto">
            {dummyPromotions.map(({ name, details, message }) => (
              <CarouselItem key={name}>
                <Card>
                  <div className="aspect-video w-full rounded-t bg-primary" />
                  <CardHeader>
                    <CardTitle>{name}</CardTitle>
                  </CardHeader>
                  <CardContent className="break-words">{message}</CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          {isMobile && (
            <div className="flex justify-center gap-2">
              {dummyPromotions.map(({ name }) => (
                <p key={name}>o</p>
              ))}
            </div>
          )}
        </Carousel>

        {!isMobile && (
          <>
            <div className="col-span-3 bg-primary-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
              pariatur!
            </div>
            <div className="col-span-3 bg-primary-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste,
              pariatur!
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CurrentPromotions;
