import { Country } from "country-state-city";
export default function CountrySelectPlainHtml() {
  const countries = Country.getAllCountries();

  return (
    <>
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex justify-center mb-5">
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
      </div>
    </>
  );
}
