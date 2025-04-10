"use client";

import React from "react";
import Button from "./Button";
import styles from "../styles/StyleGuide.module.css";
import Link from "next/link";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const StyleGuide = () => {
  const [date, setDate] = React.useState();
  return (
    <div className={styles.container}>
      <h1>Torreblanca Restaurant</h1>
      <h2>The best there is in the village</h2>
      <h3>Heading 3</h3>
      <p>
        some random text here some random text heresome random text heresome
        random text here some random text here some random text here some random
        text here some random text here
      </p>
      <div className={styles.link}>
        <Link href="/">Link</Link>
        <Button variant="default">Button 1</Button>
        <Button variant="orange">Button 2</Button>
        <Button variant="input">Button 3</Button>
        <Button variant="orange" size="sm">
          Button 2
        </Button>

        <div className="w-full">
          <Label htmlFor="firstname">First name</Label>
          <Input type="firstname" id="firstname" />
        </div>
        <div className="w-full">
          <Label htmlFor="lastname">Last name</Label>
          <Input type="lastname" id="lastname" />
        </div>
        <div className="w-full">
          <Label>Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"input"}
                className={cn("w-full justify-start text-left font-normal")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <Select className="w-full">
          <SelectTrigger>
            <SelectValue placeholder="Select a Table" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Tables</SelectLabel>
              <SelectItem value="menu1">Table of 1</SelectItem>
              <SelectItem value="menu2">Table of 2</SelectItem>
              <SelectItem value="menu3">Table of 3</SelectItem>
              <SelectItem value="menu4">Table of 4</SelectItem>
              <SelectItem value="menu5">Table of 5</SelectItem>
              <SelectItem value="menu6">Table of 6</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
export default StyleGuide;
