import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Country, type ICountry } from "country-state-city";
import { List, type RowComponentProps } from "react-window";

function SelectCountryItem({
  index,
  countries,
}: RowComponentProps<{ countries: ICountry[] }>) {
  return (
    <SelectItem key={countries[index].isoCode} value={countries[index].isoCode}>
      {countries[index].name}
    </SelectItem>
  );
}

const CountrySelectShadCnListWindow = () => {
  const countries = Country.getAllCountries();
  return (
    <>
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex justify-center mb-5">
          <Select>
            <SelectTrigger className="w-full max-w-150">
              <SelectValue placeholder="Select a Country" />
            </SelectTrigger>

            <SelectContent>
              <List
                rowComponent={SelectCountryItem}
                rowCount={countries.length}
                rowHeight={25}
                rowProps={{ countries }}
              />
            </SelectContent>
          </Select>
        </div>
      </div>
    </>
  );
};

export default CountrySelectShadCnListWindow;
