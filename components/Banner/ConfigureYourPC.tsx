import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

type Props = {};

function ConfigureYourPC({}: Props) {
  return (
    <Card className="flex min-h-60 flex-col bg-secondary-foreground text-secondary">
      <CardHeader>
        <CardTitle>Create PC for your needs</CardTitle>
        <CardDescription className="line-clamp-1">{}</CardDescription>
      </CardHeader>
      <CardContent className="line-clamp-3 flex-1">
        <p>We will help you pick the best parts</p>
      </CardContent>
      <CardFooter>
        <Button>Configure PC</Button>
      </CardFooter>
    </Card>
  );
}

export default ConfigureYourPC;
