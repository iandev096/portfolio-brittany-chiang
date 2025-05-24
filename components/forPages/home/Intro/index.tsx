interface Props {}

export default function Intro({}: Props) {
  return (
    <div className="-mt-[5vh]">
      <p className="font-mono text-secondary text-xs mb-4">Hello, my name is</p>
      <h1 className="intro-responsive-heading">Isaac Anyimiah.</h1>
      <h2 className="intro-responsive-heading-sub mb-6">
        I build mobile and web apps.
      </h2>
      <p className="sm:w-[80%] mb-14 leading-relaxed text-sm">
        <span className="text-secondary">Highly-skilled frontend engineer</span>{" "}
        with over <span className="text-secondary">7 years</span> of
        professional experience, specializing in building applications with{" "}
        <span className="text-secondary">Javascript/Typescript</span>{" "}
        technologies. Proven ability to develop and implement A/B tests and new
        features weekly, significantly increasing conversion rates for
        high-profile clients (
        <span className="text-secondary">
          Pizzahut, PremierInn, Mulberry, etc
        </span>
        ). Experienced in constructing responsive, user-friendly interfaces and
        entire websites and web applications from the ground up.
      </p>
    </div>
  );
}
