import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Footer from "./components/structure/Footer.jsx";
import Header from "./components/structure/Header.jsx";
import Home from "./pages/Home.jsx";
import Articles from "./pages/Articles.jsx";
import Services from "./pages/Services.jsx";
import ArticleDetail from "./pages/ArticleDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import { getURI } from "./utils";
import "./App.scss";
import FlightList from "./pages/FlightList.jsx";
import Experience from "./pages/Experience.jsx";

function App() {
  return (
    <HelmetProvider>
      <div className="app">
        <Helmet>
          <script
            src="https://universal-editor-service.adobe.io/cors.js"
            async
          />  
           <script
            src="https://publish-p135360-e1341441.adobeaemcloud.com/content/dam/emirates/at.js"
            async
          />
          <meta
            name="urn:adobe:aue:system:aemconnection"
            content={`aem:${getURI()}`}
          />
        </Helmet>
        <Header />
        <Router>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/home" element={<Home />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </main>
        </Router>
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
