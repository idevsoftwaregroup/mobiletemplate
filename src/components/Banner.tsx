export default function Banner() {
  const description = "دست‌خط بستری برای انتشار دانش، تجربه و ایده‌های نو در دنیای فناوری، برنامه‌نویسی، امنیت، طراحی و خلاقیت دیجیتال است؛ جایی که تفکر انسان با تکنولوژی به زبان جدیدی تبدیل می‌شود."
  const header = "دست خط";
  const rightAlign = () => {
    return "right-align"
  };
  return (
    <article className="hero-banner primary-container round padding">
      <h3 className={rightAlign()}>{ header } 🚀</h3>

      <p>
        { description }
      </p>

      <nav>
        <button className="primary slow-ripple">
          <i>rocket_launch</i>
          <span>راه اندازی اولیه</span>
        </button>

        <button className="transparent">
          <i>description</i>
          <span>مستندات</span>
        </button>
      </nav>
    </article>
  );
}
