import Navbar from "./Navbar";
// import FormComponent from "./FormComponent";
import Banner from "./Banner";

export default function LayoutComponent() {

  return (
    <>
      <Navbar />

      <main className="responsive padding">
        <div className="no-space"></div>
          <div className="field label suffix no-border round extra custom-input ">
              <input type="text" />
              <label >جستجو کن</label>
              <i>search</i>
          </div>

        <div className="extra-large-space large-margin"></div>

          <Banner />

        <div className="extra-large-space"></div>


      </main>
    </>
  );
}
