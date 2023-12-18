import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux-toolkit/store";
import "./index.css";
import SuspenseContent from "./containers/SuspenseContent";

import App from "./App";
import { Suspense } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // 
  <Suspense fallback={<SuspenseContent />}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);

