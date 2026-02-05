import CountrySelectPlainHtml from "./CountrySelectPlainHtml";
import CountrySelectShadCn from "./CountrySelectShadCn";
import CountrySelectListWindowDemo from "./CountrySelectListWindowDemo";
import { AppNavMenu } from "./AppNavMenu";
import { Route, Routes } from "react-router-dom";
import CountrySelectShadCnListWindow from "./CountrySelectShadCnListWindow";

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
