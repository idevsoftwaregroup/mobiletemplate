export default function Banner() {
  return (
    <article className="hero-banner primary-container round padding">
      <h3>🚀 Mobile Template</h3>

      <p>
        Build fast, modern and responsive mobile web applications using
        React, TypeScript, BeerCSS, Express and MongoDB.
      </p>

      <nav>
        <button className="primary slow-ripple">
          <i>rocket_launch</i>
          <span>Get Started</span>
        </button>

        <button className="transparent">
          <i>description</i>
          <span>Documentation</span>
        </button>
      </nav>
    </article>
  );
}
