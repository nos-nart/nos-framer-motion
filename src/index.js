import * as ReactDOMClient from 'react-dom/client';
import { App } from "./App";

const app = document.getElementById("app");
// Create a root.
const root = ReactDOMClient.createRoot(app);
root.render(<App />);