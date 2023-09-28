import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar/NavBar";
import Hedeer from "./components/Hedeer/Hedeer";
import Categeis from "./components/Categeis/Categeis";
import Caed from "./components/Caed/Caed";
import { DaaApi } from "./components/DataApi";
import { useState } from "react";
const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(DaaApi);
  const filterdyCat = (cat) => {
    if (cat === "الكل") {
      setFilteredProducts(DaaApi);
    } else {
      const newData = DaaApi.filter((item) => item.categey === cat);
      setFilteredProducts(newData);
    }
  };

  const aillCat = ["الكل", ...new Set(DaaApi.map((i) => i.categey))];

  const searchProducts = (searchText) => {
    setFilteredProducts(
      DaaApi.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };


  return (
    <Container fluid>
      <NavBar onChange={searchProducts} />
      <Hedeer />
      <Categeis filterdyCat={filterdyCat} aillCat={aillCat} />
      <Caed filteredProducts={filteredProducts} />
    </Container>
  );
};

export default App;
