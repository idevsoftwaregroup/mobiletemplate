import Navbar from "./Navbar";
import Banner from "./Banner";

export default function LayoutComponent() {

  return (
    <>
      <Navbar />

      <main className="responsive padding">

        <div className="max">

          {/* Search Box */}
          <div className="field label suffix no-border round extra custom-input">
            <input
              type="text"
              className="transparent border borderInput"
            />
            <label>
              جستجو کن
            </label>
            <i>
              search
            </i>
          </div>

          <div className="large-space"></div>

          {/* Banner */}
          <div className="top">
            <Banner />
          </div>


        </div>

      </main>
    </>
  );
}
