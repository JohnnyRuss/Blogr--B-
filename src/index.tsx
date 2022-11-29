import { createRoot } from "react-dom/client";
import "./styles/index.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
