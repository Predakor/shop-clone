"use client";
import useDealOfTheDay from "@/hooks/useDealOfTheDay";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Progress } from "../ui/progress";
import { getTimeUntilEndOfDay } from "@/lib/utils";

type Props = {};

const priceUnit = "$";
const max = 100;
const itemsLeft = 48;

function DealOfTheDay({}: Props) {
  const { name, price, category } = useDealOfTheDay();
  const { hours, minutes, seconds } = getTimeUntilEndOfDay();
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="aspect-square w-full bg-primary " />
        <CardDescription className="text-center">{category}</CardDescription>
        <CardTitle className="text-center">{name}</CardTitle>
      </CardHeader>
      <CardContent className="line-clamp-2 min-h-12">
        <div className="flex items-center justify-center gap-4">
          <p className="line-through">{price + priceUnit}</p>
          <p className="text-2xl text-red-700">{price + priceUnit}</p>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col justify-center gap-4">
        <div className="flex flex-col">
          <h2>Promotions end in</h2>
          <p className="self-center">{hours + ":" + minutes + ":" + seconds}</p>
        </div>
        <div className="flex w-full flex-col justify-stretch">
          <Progress value={itemsLeft} max={max} />
          <p className="self-center">{itemsLeft} left</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default DealOfTheDay;
