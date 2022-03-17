import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "App";
import "@fortawesome/fontawesome-free/css/all.css";
import "index.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
