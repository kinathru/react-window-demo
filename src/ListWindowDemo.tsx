import { List, type RowComponentProps } from "react-window";
import { Country } from "country-state-city";

function RowComponent({
  index,
  names,
  style,
}: RowComponentProps<{ names: string[] }>) {
  return (
    <div className="flex items-center justify-between" style={style}>
      {names[index]}
      <div className="text-slate-500">
        {index + 1} of {names.length}
      </div>
    </div>
  );
}

const ListWindowDemo = () => {
  const names = Country.getAllCountries().map(
    (c) => `${c.name} [${c.isoCode}]`,
  );

  return (
    <div className="flex flex-col max-h-50 border w-full p-4">
      <List
        rowComponent={RowComponent}
        rowCount={names.length}
        rowHeight={25}
        rowProps={{ names }}
      ></List>
    </div>
  );
};

export default ListWindowDemo;
