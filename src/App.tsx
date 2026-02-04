import CountrySelectPlainHtml from "./CountrySelectPlainHtml";
import CountrySelectShadCn from "./CountrySelectShadCn";
import ListWindowDemo from "./ListWindowDemo";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex justify-center mb-5">
          <CountrySelectPlainHtml></CountrySelectPlainHtml>
        </div>
        <div className="flex justify-center mb-5">
          <CountrySelectShadCn></CountrySelectShadCn>
        </div>
        <div className="flex justify-center">
          <ListWindowDemo></ListWindowDemo>
        </div>
      </div>
    </>
  );
}

export default App;
