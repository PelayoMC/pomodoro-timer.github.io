import "./App.css";
import { ConfigureStore } from "./redux/store";
import { Provider } from "react-redux";
import Main from "./Main";

function App() {  
  const store = ConfigureStore();

  return (
    <Provider store={store}>
      <Main />
    </Provider>    
  );
}

export default App;
