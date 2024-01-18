import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type BannerProps = {
  occasion: {
    name: string;
    message: string;
    product: string;
  };
};

function Banner({ occasion }: BannerProps) {
  const { name, message, product } = occasion;
  return (
    <Card>
      <CardHeader>
        <CardTitle>{name}</CardTitle>
        <CardDescription className="line-clamp-1">{message}</CardDescription>
      </CardHeader>
      <CardContent className="line-clamp-3 flex">
        {/* <p>{product}</p> */}
      </CardContent>
      <CardFooter>
        <Button>See details</Button>
      </CardFooter>
    </Card>
  );
}

export default Banner;
