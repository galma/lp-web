import ReactDOM from "react-dom";
import App from "./App";

it("It should render", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});
