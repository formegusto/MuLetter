import Content from "./components/common/Content";
// import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <Content>
        <MainPage />
      </Content>
      {/* <Footer /> */}
    </>
  );
}

export default App;
