import "./App.css";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import SubMenu from "./components/header/subMenu/SubMenu";
const App = () => {
  return (
    <div>
      <SubMenu />
      <Header />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
