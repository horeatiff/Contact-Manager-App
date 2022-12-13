import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "containers/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);

/**
 * @file prettierrc
 * just to style this project based on my preferences
 * and to keep some consistency along the way
 */

/**
 * @file jsconfig.json
 * just setting up some absolute imports
 * and import with 'folderName' instead of './folderName'
 */
