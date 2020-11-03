function Header({ image }) {
  return (
    <div>
      <img className="logo" src={image} alt="logo" />
    </div>
  );
}

export default Header;
