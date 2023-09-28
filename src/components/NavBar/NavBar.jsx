import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navBar.css";


const NavBar = (props) => {


  const onChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <Navbar expand="lg" className="bg-dark nav-bar">
      <Container>
        <Navbar.Brand href="#">مطعم فريكا </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <form className="middle-header-search-box">
            <input
            defaultValue={""} onChange={onChange}
              type="text"
              placeholder="ابحث باسم المنتج؟"
            />
            <button  className="search-box-btn">
              ابحث
            </button>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
