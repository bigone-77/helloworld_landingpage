import { useEffect } from "react"; // useEffect 훅 임포트
import Footer from "./components/Footer";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import MotionWrapper, { type MotionDirection } from "./shared/MotionWrapper";

type SectionItem = {
  renderNode: React.ComponentType<any>;
  direction?: MotionDirection; // direction은 선택 사항이므로 '?'를 붙입니다.
};

function App() {
  const sections = [
    { renderNode: Section1 },
    { renderNode: Section2 },
    { renderNode: Section3, direction: "left" },
    { renderNode: Section4, direction: "right" },
    { renderNode: Section5, direction: "left" },
    { renderNode: Section6, direction: "right" },
    { renderNode: Section7 },
    { renderNode: Footer },
  ] as SectionItem[];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      {sections.map((component, index) => (
        <MotionWrapper key={index} direction={component.direction}>
          <component.renderNode />
        </MotionWrapper>
      ))}
    </div>
  );
}

export default App;
