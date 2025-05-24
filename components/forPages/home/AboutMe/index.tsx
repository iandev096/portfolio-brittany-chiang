import TechItem from "../../../TechItem";
import SectionHeading from "../../../Typography/SectionHeading";

interface Props {}

const TECHS = [
  ["Javascript", "Typescript", "CSS/SCSS"],
  ["ReactJS", "React Native", "NodeJS"],
];

export default function AboutMe({}: Props) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="text-sm space-y-4 sm:w-8/12 sm:mr-12">
          <SectionHeading prepend="01" title="About Me" />
          <p className="leading-relaxed">
            My foundation in software engineering is built on a strong aptitude
            for analytical problem-solving. I am passionate about dissecting
            complex challenges, identifying core requirements, and developing
            effective, technology-driven solutions. This methodical approach to
            transforming problems into functional applications is what I find
            most compelling about the field.
          </p>
          <p className="leading-relaxed">
            I am driven to leverage these skills to contribute to projects that
            deliver meaningful and positive outcomes. My aspiration is to
            utilize technology as a constructive force, and this goal fuels my
            commitment to continuous professional development and a dedicated
            effort to enhance my expertise as a developer with each passing day.
          </p>
          <p className="leading-relaxed">
            My key technical proficiencies include:
          </p>
          <div className="columns-2 font-mono text-xs pb-4 sm:w-8/12 md:w-7/12 lg:w-6/12">
            {TECHS.map((list) => (
              <ul key={list.toString()} className="space-y-2">
                {list.map((item) => (
                  <TechItem item={item} key={item} />
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* IMAGE */}
        <div className="sm:w-4/12 sm:mt-20">
          <div className="w-4/6 min-w-[180px] max-w-[300px] mx-auto mt-4 sm:m-0 sm:w-full bg-light opacity-90 mix-blend-color-dodge hover:mix-blend-normal outline outline-2 outline-offset-8 outline-secondary hover:outline-gray-dark">
            <img
              className="h-full w-full brightness-95"
              src="/images/me.jpg"
              alt="Isaac Anyimiah"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
