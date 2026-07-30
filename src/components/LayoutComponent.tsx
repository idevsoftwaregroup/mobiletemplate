import Navbar from "./Navbar";
// import FormComponent from "./FormComponent";
import Banner from "./Banner";

export default function LayoutComponent() {

  return (
    <>
      <Navbar />

      <main className="responsive padding">

        <div className="responsive">
          <div className="no-space"></div>
            <div className="field label suffix no-border round extra custom-input ">
                <input type="text" className="transparent border borderInput"/>
                <label >جستجو کن</label>
                <i>search</i>
            </div>
        </div>
        <div className="top no-padding">
            <div className="space"></div>
          <Banner />
        </div>

      </main>
    </>
  );
}
