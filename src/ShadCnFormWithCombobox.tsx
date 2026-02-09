import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";

import { Country, type ICountry } from "country-state-city";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field.tsx";
import { toast } from "sonner";

const CountrySetupSchema = z.object({
  country: z.custom<ICountry>(),
});

type CountrySetupForm = z.infer<typeof CountrySetupSchema>;

const ShadCnFormWithCombobox = () => {
  const allCountries = Country.getAllCountries().slice(0, 10);

  const form = useForm<CountrySetupForm>({
    resolver: zodResolver(CountrySetupSchema),
    defaultValues: {
      country: allCountries.at(0),
    },
  });

  const onSubmit = async (formData: CountrySetupForm) => {
    console.log(formData);
    form.setValue("country", formData.country);
    toast.success(`Form submitted with value ${formData.country.name}`);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto p-10">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex justify-center mb-5 p-5">
            <p>This example filters combobox values based on input</p>
          </div>

          <div className="flex justify-center mb-5 p-5">
            <div className="flex flex-col max-w-100 items-center justify-center mb-5">
              <Controller
                name="country"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    orientation="responsive"
                    data-invalid={fieldState.invalid}
                  >
                    <FieldLabel htmlFor="sel-country">Country</FieldLabel>
                    <Combobox
                      name={field.name}
                      value={field.value}
                      items={allCountries}
                      itemToStringValue={(country: ICountry) => country.isoCode}
                      itemToStringLabel={(country: ICountry) => country.name}
                      onValueChange={field.onChange}
                      isItemEqualToValue={(item, sel) => {
                        return item.isoCode === sel.isoCode;
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
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              ></Controller>

              <Button className="mt-2 cursor-pointer">Submit</Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
export default ShadCnFormWithCombobox;
