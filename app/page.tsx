import Banner from "@/components/Banner/Banner";
import ProductCard from "@/components/ProductCard/ProductCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { dummyProducts, dummyPromotions } from "@/lib/dummyData";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-4">
      <div className="flex min-w-full max-w-[100vh] justify-center overflow-x-hidden">
        <Carousel className="w-2/3">
          <CarouselContent className="px-16 pl-0">
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
              <p key={promotion.name}>{promotion.name}</p>
            ))}
          </div>
        </Carousel>
      </div>
      <section className="grid w-2/3 grid-flow-row gap-4 md:grid-cols-3 lg:grid-cols-4">
        <h2 className="col-span-full text-2xl font-bold">Newest Products</h2>
        {dummyProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </section>
    </main>
  );
}
