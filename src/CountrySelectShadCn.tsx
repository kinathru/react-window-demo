import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Country } from "country-state-city";

const CountrySelectShadCn = () => {
  const countries = Country.getAllCountries();

  return (
    <>
      <Select>
        <SelectTrigger className="w-full max-w-48">
          <SelectValue placeholder="Select a Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            {countries.map((country) => {
              return (
                <SelectItem key={country.isoCode} value={country.isoCode}>
                  {country.name}
                </SelectItem>
              );
            })}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default CountrySelectShadCn;
