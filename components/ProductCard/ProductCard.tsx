import { Product } from "@/types/product";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const { id, name, about, price, promotions, category } = product;
  return (
    <Card>
      <CardHeader>
        <div className="aspect-square w-full bg-primary " />
        <CardDescription className="text-center">{category}</CardDescription>
      </CardHeader>
      <CardContent className="line-clamp-2 min-h-12">
        <CardTitle className="text-center">{name}</CardTitle>
      </CardContent>
      <CardFooter className="justify-center">{price}$</CardFooter>
    </Card>
  );
}

export default ProductCard;
