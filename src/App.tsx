import CountrySelectPlainHtml from "./CountrySelectPlainHtml";
import CountrySelectShadCn from "./CountrySelectShadCn";
import CountrySelectListWindowDemo from "./CountrySelectListWindowDemo";
import { AppNavMenu } from "./AppNavMenu";
import { Route, Routes } from "react-router-dom";
import CountrySelectShadCnListWindow from "./CountrySelectShadCnListWindow";
import CountrySelectComboBox from "./CountrySelectComoboBox";
import ShadCnFormWithCombobox from "./ShadCnFormWithCombobox";
import ShadCnCommandDemo from "./ShadCnCommandDemo";
import { ShadcnVirtualizedCombobox } from "./ShadcnVirtualizedCombobox";

function generateItems() {
  const items: string[] = [];
  for (let i = 1; i <= 20000; i++) {
    items.push(`item ${i}`);
  }
  return items;
}

const initialOptions: string[] = generateItems();

function App() {
  return (
    <>
      <header className="flex justify-center p-5">
        <AppNavMenu />
      </header>
      <main className="min-h-[80vh] md:min-h-[90vh]">
        <Routes>
          <Route path="" element={<CountrySelectPlainHtml />}></Route>
          <Route path="plain-html" element={<CountrySelectPlainHtml />}></Route>
          <Route path="shadcn" element={<CountrySelectShadCn />}></Route>
          <Route
            path="react-window"
            element={<CountrySelectListWindowDemo />}
          ></Route>
          <Route
            path="shadcn-react-window"
            element={<CountrySelectShadCnListWindow />}
          ></Route>
          <Route
            path="shadcn-combo-box"
            element={<CountrySelectComboBox />}
          ></Route>
          <Route
            path="shadcn-combo-box-form"
            element={<ShadCnFormWithCombobox />}
          ></Route>
          <Route
            path="shadcn-command-demo"
            element={<ShadCnCommandDemo />}
          ></Route>
          <Route
            path="shadcn-virtualized-combobox"
            element={<ShadcnVirtualizedCombobox options={initialOptions} />}
          ></Route>
        </Routes>
      </main>
      <footer>
        <div className="flex justify-center">
          All Rights Reserved. KREACT UI © {new Date().getFullYear()}
        </div>
      </footer>
    </>
  );
}

export default App;
