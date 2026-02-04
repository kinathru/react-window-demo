import { Country } from "country-state-city";
export default function CountrySelectPlainHtml() {
  const countries = Country.getAllCountries();

  return (
    <>
      <div>
        <label htmlFor="sel-country">Select Country : </label>
        <select name="select-country" id="sel-country">
          {countries.map((country) => {
            return (
              <option key={country.isoCode} value={country.isoCode}>
                {country.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
