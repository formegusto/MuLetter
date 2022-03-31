import Content from "./components/common/Content";
import Header from "./components/common/Header";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Header />
      <Content>
        <MainPage />
      </Content>
    </>
  );
}

export default App;
