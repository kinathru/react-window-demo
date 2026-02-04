import CountrySelectPlainHtml from "./CountrySelectPlainHtml";
import CountrySelectShadCn from "./CountrySelectShadCn";

function App() {
  return (
    <>
      <div className="max-w-7xl mx-auto p-10">
        <div className="flex justify-center mb-5">
          <CountrySelectPlainHtml></CountrySelectPlainHtml>
        </div>
        <div className="flex justify-center">
          <CountrySelectShadCn></CountrySelectShadCn>
        </div>
      </div>
    </>
  );
}

export default App;
