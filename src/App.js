import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BodyWrapper, Header, Footer } from "./components";
import { Home, PrivacyPolicy, Article } from "./routes";
import "./index.scss"; // Tell webpack that Button.js uses these styles
import ScrollToTop from "./lib/ScrollToTop";

export const App = () => {
  return (
    <>
      <BodyWrapper>
        <BrowserRouter>
          <ScrollToTop />
          <meta itemProp="name" content="EasyPanda" />
          <meta itemProp="url" content="https://easypanda.com" />

          {/* Header */}
          <Switch>
            <Route component={Header} />
          </Switch>

          <div
            itemScope
            itemProp="mainEntity"
            itemType="http://schema.org/Webpage"
          >
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/privacy-policy" exact component={PrivacyPolicy} />
              <Route path="/article" exact component={Article} />
            </Switch>
          </div>

          {/* Footer */}
          <Switch>
            <Route component={Footer} />
          </Switch>
        </BrowserRouter>
      </BodyWrapper>
    </>
  );
};
