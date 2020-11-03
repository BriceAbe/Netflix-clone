import Title from "./Title";
import Carroussel from "./Carrousel";

function Section(props) {
  return (
    <div>
      <Title titre={props.elements.category} />
      <Carroussel pictures={props.elements.images} />
    </div>
  );
}

export default Section;
