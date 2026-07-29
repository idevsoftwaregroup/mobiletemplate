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

      <p>
        { description }
      </p>

      <nav className={style.rightAlign}>
        <button className="primary slow-ripple">
          <i>rocket_launch</i>
          <span>راه اندازی اولیه</span>
        </button>

        <button className="tertiary">
          <i>description</i>
          <span>مستندات</span>
        </button>
      </nav>
    </article>
  );
}
