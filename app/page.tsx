import ConfigureYourPC from "@/components/Banner/ConfigureYourPC";
import PromotionsBanner from "@/components/Banner/PromotionsBanner/PromotionsBanner";
import CurrentPromotions from "@/components/CurrentPromotions/CurrentPromotions";
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
import { dummyNews, dummyProducts, dummyServices } from "@/lib/dummyData";

export default function Page() {
  const news = dummyNews;
  return (
    <main className="flex w-screen flex-col items-center gap-8 overflow-x-hidden px-2 lg:gap-16 lg:px-44">
      <section className="w-full">
        <PromotionsBanner />
      </section>
      <section className="grid grid-flow-row gap-6 md:grid-cols-3 lg:grid-cols-4">
        <h2 className="col-span-full text-2xl font-bold lg:text-3xl">
          Newest Products
        </h2>
        {dummyProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
      <section className="w-full">
        <ConfigureYourPC />
      </section>
      <section className="flex w-full flex-col gap-6">
        <h2 className="text-2xl font-bold lg:text-3xl">Services</h2>

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
      <section className="grid gap-8 md:grid-cols-3 ">
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
    </main>
  );
}
