function Carrousel({ pictures }) {
  return (
    <div className="container">
      <div className="scrolling">
        {pictures.map((item) => {
          return <img src={item} alt="movie" />;
        })}
      </div>
    </div>
  );
}

export default Carrousel;
