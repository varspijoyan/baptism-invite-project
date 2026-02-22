import { Provider } from "react-redux";
import "./App.css";
import Layout from "./pages/Layout";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
