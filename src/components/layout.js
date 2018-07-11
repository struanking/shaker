import { Link, StaticQuery } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import "typeface-scope-one";
import Logo from "../components/Logo";
import "./global.css";

export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet defaultTitle={`Shaker`} titleTemplate={`%s | Shaker`}>
          <html lang="en" />
          <meta name="description" content="Library of cocktail drinks" />
          <meta name="keywords" content="cocktail gin rum vodka whisky whiskey" />
        </Helmet>
        
        <a href="#main">skip to content</a>
        
        <header role="banner">
          <nav aria-label="site">
            <ul className="inline">
              <li>
                <Link to={`/`}>
                  <Logo
                    width="1em"
                    height="1em"
                    fill="darkgrey"
                    aria-hidden="true"
                    className="site-logo"
                  />
                  Shaker <span className="visually-hidden">Home</span>
                </Link>
              </li>
              <li>
                <Link to={`/categories/`}>Categories</Link>
              </li>
              <li>
                <Link to={`/cocktails/`}>Cocktails</Link>
              </li>
              <li>
                <Link to={`/ingredients/`}>Ingredients</Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main id="main">
          {children}
        </main>

        <footer role="contentinfo">
          <p>Shaker 2018</p>
        </footer>
      </>
    )}
  />
);
