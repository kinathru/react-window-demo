import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

import { Country, type ICountry } from "country-state-city";
import { useState } from "react";

const CountrySelectComboBox = () => {
  const allCountries = Country.getAllCountries();
  const [countries, setCountries] = useState(allCountries.slice(0, 5));
  return (
    <>
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex justify-center mb-5 p-5">
          <p>This example filters combobox values based on input</p>
        </div>
        <div className="flex justify-center mb-5">
          <Combobox
            items={countries}
            itemToStringValue={(country: ICountry) => country.name}
            isItemEqualToValue={(item: ICountry, selected: ICountry) =>
              item.isoCode === selected.isoCode
            }
            itemToStringLabel={(country: ICountry) => country.name}
            autoHighlight
            onInputValueChange={(searchText) => {
              if (searchText) {
                setCountries(
                  allCountries
                    .slice()
                    .filter((c) =>
                      c.name.toLowerCase().startsWith(searchText.toLowerCase()),
                    ),
                );
              } else {
                setCountries(allCountries.slice(0, 10));
              }
            }}
          >
            <ComboboxInput placeholder="Select a Country" showClear />
            <ComboboxContent>
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item.isoCode} value={item}>
                    {item.name}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
      </div>
    </>
  );
};

export default CountrySelectComboBox;
