import "./App.css";
import DataFetchingAxios from "./Data_fetching_with_axios/DataFetchingAxios";
import DataFetchingAxiosReducer from "./Data_fetching_with_axios_reducer/DataFetchingAxiosReducer";
import DataFetchingAxiosReducerContext from "./Data_fetching_with_axios_reducer_context/DataFetchingAxiosReducerContext";

function App() {
  return (
    <div className="App">
      {/* <DataFetchingAxios />
      <DataFetchingAxiosReducer /> */}
      <DataFetchingAxiosReducerContext />
    </div>
  );
}

export default App;
