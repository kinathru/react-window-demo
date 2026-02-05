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

const CountrySelectShadCnListWindow = () => {
  const countries = Country.getAllCountries();
  return (
    <>
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex justify-center mb-5">
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
        </div>
      </div>
    </>
  );
};

export default CountrySelectShadCnListWindow;
