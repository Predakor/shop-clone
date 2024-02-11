import ConfigureYourPC from "@/components/Banner/ConfigureYourPC";
import PromotionsBanner from "@/components/Banner/PromotionsBanner/PromotionsBanner";
import CurrentPromotions from "@/components/CurrentPromotions/CurrentPromotions";
import DealOfTheDay from "@/components/DealOfTheDay/DealOfTheDay";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  categories,
  dummyNews,
  dummyProducts,
  dummyServices,
} from "@/lib/dummyData";

export default function Page() {
  const news = dummyNews;
  return (
    <main className="flex flex-col items-center gap-8 overflow-x-hidden px-2 lg:gap-16 lg:px-44">
      <section className="w-full">
        <PromotionsBanner />
      </section>
      <section className="grid w-full gap-4 md:grid-cols-6 md:grid-rows-[auto,1fr,1fr]">
        <h2 className="text-3xl font-bold md:col-span-2">Deal of the day</h2>
        <div className="md:col-span-2 md:row-span-full md:row-start-2">
          <DealOfTheDay />
        </div>
        <h2 className="text-3xl font-bold md:col-span-4 md:col-start-3">
          Newest Products
        </h2>
        {dummyProducts.slice(0, 8).map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
      <section className="flex w-full flex-col gap-4 lg:gap-8">
        <ConfigureYourPC />
      </section>
      <section className="flex w-full flex-col gap-4 lg:gap-8">
        <h2 className="text-2xl font-bold">Services</h2>

        <Carousel
          opts={{
            skipSnaps: true,
          }}
          className="flex gap-2"
        >
          <CarouselContent className="-ml-2">
            {dummyServices.map((service) => (
              <CarouselItem
                className="basis-20 text-sm md:basis-28 lg:basis-1/6"
                key={service.name}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="aspect-square w-full rounded-full bg-primary"></div>
                  <p className="text-center">{service.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <CurrentPromotions />
      <section className="flex w-full flex-col gap-4 lg:gap-8">
        <h2 className="col-span-full text-2xl font-bold lg:text-3xl">News</h2>

        {news.map(({ about, date, title, link }) => (
          <Card key={link}>
            <CardHeader className="rounded-t bg-primary">
              <CardTitle className="line-clamp-2">{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col pt-4">
              <p className="text-center text-muted-foreground">{date}</p>
            </CardContent>
            <CardFooter>
              <CardDescription className="text-foreground">
                {about}
              </CardDescription>
            </CardFooter>
          </Card>
        ))}
      </section>
      <section className="flex w-full flex-col gap-4 lg:gap-8">
        <h2 className="text-2xl font-bold lg:text-3xl">Our recommendations</h2>
        <Carousel>
          <CarouselContent>
            {news.toReversed().map(({ about, date, title, link }) => (
              <CarouselItem className="" key={link}>
                <Card>
                  <CardHeader className="rounded-t bg-primary">
                    <CardTitle className="line-clamp-2">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-col pt-4">
                    <p className="text-center text-muted-foreground">{date}</p>
                  </CardContent>
                  <CardFooter>
                    <CardDescription className="text-foreground">
                      {about}
                    </CardDescription>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      <section className="flex w-full flex-col gap-4 lg:gap-8">
        <h2 className="text-2xl font-bold lg:text-3xl">Categories</h2>

        <Carousel
          opts={{
            skipSnaps: true,
          }}
        >
          <CarouselContent className="">
            {categories.map((category) => (
              <CarouselItem
                className="basis-20 text-sm md:basis-28 lg:basis-1/12"
                key={category.name}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="aspect-square w-full rounded-full bg-primary"></div>
                  <p className="text-center">{category.name}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </main>
  );
}
