import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

import { Country, type ICountry } from "country-state-city";

const CountrySelectComboBox = () => {
  const countries = Country.getAllCountries();

  return (
    <>
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex justify-center mb-5">
          <Combobox
            items={countries}
            itemToStringValue={(country: ICountry) => country.name}
            isItemEqualToValue={(item: ICountry, selected: ICountry) =>
              item.isoCode === selected.isoCode
            }
            itemToStringLabel={(country: ICountry) => country.name}
          >
            <ComboboxInput placeholder="Select a Country" />
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
