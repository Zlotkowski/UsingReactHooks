import { BrowserRouter, Route } from "react-router-dom";
import DataContextProvider from "./DataContext";
import HomeScreen from "./HomeScreen";
import "./App.css";
import DetailsScreen from "./DetailsScreen";

function App() {
  return (
    <div className="App">
      <DataContextProvider>
        <BrowserRouter>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/details/:id" component={DetailsScreen} exact />
        </BrowserRouter>
      </DataContextProvider>
    </div>
  );
}

export default App;
