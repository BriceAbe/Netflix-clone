import Title from "./Title";
import Carroussel from "./Carrousel";

function Section({ elements }) {
  return (
    <div>
      <Title titre={elements.category} />
      <Carroussel pictures={elements.images} />
    </div>
  );
}

export default Section;
