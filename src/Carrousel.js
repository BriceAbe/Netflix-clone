function Carrousel({ pictures }) {
  return (
    <div className="container">
      <div className="scrolling">
        {pictures.map((item, i) => {
          return <img className="picture" key={i} src={item} alt="movie" />;
        })}
      </div>
    </div>
  );
}

export default Carrousel;
