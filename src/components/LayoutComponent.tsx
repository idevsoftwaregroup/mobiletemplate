import Navbar from "./Navbar";
import Banner from "./Banner";

export default function LayoutComponent() {

  return (
    <>
      <Navbar />

      <main className="responsive ">

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

          <div className="large-space"></div>

          <div className="right-align padding ">


            <div className="semi-bold large">مقاله/مطالب روز</div>
</div>
          <div>
            <aside className="right small-width small-height padding">
              <img className="responsive round" src="https://www.beercss.com/beer-and-woman.webp" />
            </aside>
            <h5 className="right-align margin bottom semi-bold"><a href="#">دوره های عملیات/توسعه</a></h5>
            <p className="dirRTL">دوره های مربوط به DevOps به زودی در یک آموزشگاه معتبر در تهران شروع می شود. شما می توانید ...</p>
          </div>

        </div>

      </main>
    </>
  );
}
