import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function SearchInput() {
  return (
    <div className="flex gap-1 rounded-lg border">
      <label htmlFor="searchInput"></label>
      <Input
        className="rounded-r-none border-0 border-r"
        type="search"
        id="searchInput"
        placeholder="Search"
      />

      <Select>
        <SelectTrigger className="w-[100px] border-none">
          <SelectValue placeholder="All" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Cars</SelectItem>
            <SelectItem value="banana">Parts</SelectItem>
            <SelectItem value="blueberry">Wheels</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button className="rounded-l-none">
        <MagnifyingGlassIcon />
      </Button>
    </div>
  );
}

export default SearchInput;
