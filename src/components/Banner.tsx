export default function Banner() {
  const description = "دست‌خط بستری برای انتشار دانش، تجربه و ایده‌های نو در دنیای فناوری، برنامه‌نویسی، امنیت، طراحی و خلاقیت دیجیتال است؛ جایی که تفکر انسان با تکنولوژی به زبان جدیدی تبدیل می‌شود."
  const header = "دست خط";
// some styles
  const style = {
    rightAlign: "right-align",
    leftAlign: "left-align",
    smallHeader: "small",
    mediumHeader: "medium",
    largeHeader: "large"
  }


  return (
    <article className="hero-banner inverse-surface round padding">
      <h3 className={style.rightAlign}>{ header } 🚀</h3>

      <p className={style.rightAlign}>
        { description }
      </p>

      <nav className={style.rightAlign}>
        <button className="light-green6 slow-ripple extend circle">
          <i>info</i>
          <span>درباره ما</span>
        </button>

        <button className="blue6 extend circle">
          <i>book_4</i>
          <span>دوره های ما</span>
        </button>
      </nav>
    </article>
  );
}
