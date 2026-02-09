import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { CommandLoading } from "cmdk";
import { Country } from "country-state-city";
import { useState } from "react";

const ShadCnCommandDemo = () => {
  const allCountries = Country.getAllCountries();
  const [countries, setCountries] = useState(allCountries.slice(0, 5));
  const [loading, setLoading] = useState(false);

  return (
    <div className="max-w-7xl mx-auto p-10">
      <div className="flex justify-center mb-5">
        <Command className="max-w-sm rounded-lg border">
          <CommandInput
            placeholder="Type a command or search..."
            onValueChange={(searchText) => {
              setLoading(true);
              if (!searchText) {
                setCountries(allCountries.slice(0, 5));
                return;
              }

              console.log(`Search Text is ${searchText}`);

              const filtered = allCountries
                .slice()
                .filter((country) =>
                  country.name
                    .toLowerCase()
                    .startsWith(searchText.toLowerCase()),
                );
              console.log(filtered.map((f) => f.name));
              setCountries(filtered);
              setLoading(false);
            }}
          />
          <CommandList>
            {loading && <CommandLoading>Items loading</CommandLoading>}
            <CommandEmpty>No results found.</CommandEmpty>
            {countries.map((country) => {
              return (
                <CommandItem key={country.isoCode}>
                  <span>{country.name}</span>
                </CommandItem>
              );
            })}
          </CommandList>
        </Command>
      </div>
    </div>
  );
};
export default ShadCnCommandDemo;
