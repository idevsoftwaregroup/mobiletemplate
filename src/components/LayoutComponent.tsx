import Navbar from "./Navbar";
// import FormComponent from "./FormComponent";
import Banner from "./Banner";

export default function LayoutComponent() {
  return (
    <>
      <Navbar />

      <main className="responsive">
        <div className="no-space"></div>

        <article className="card padding">
          <Banner />
        </article>

        <div className="extra-large-space"></div>
      </main>
    </>
  );
}
