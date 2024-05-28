import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "page.tsx";
import "./global.css";



const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App/>);
