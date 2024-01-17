import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CATEGORIES } from "@/constants";
import { capitalize, cn } from "@/lib/utils";

export function CategoryCombobox({ name }: { name: string }) {
  const [open, setOpen] = React.useState(false);
  const form = useFormContext();

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full text-left"
            >
              {field.value ? capitalize(field.value) : "Select category"}
              <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search category..." className="h-9" />
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup>
                {CATEGORIES.map((category) => (
                  <CommandItem
                    key={category}
                    value={category}
                    onSelect={(currentValue) => {
                      field.onChange(currentValue);
                      setOpen(false);
                    }}
                  >
                    {capitalize(category)}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        field.value === category ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    />
  );
}
