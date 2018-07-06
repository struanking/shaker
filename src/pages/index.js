import { Link } from "gatsby";
import React from "react";
import FukolGridList from "../components/FukolGridList";
import Hero, { HeroTitle } from "../components/Hero";
import Layout from "../components/layout";
import Nav from "../components/nav";

export default ({ data }) => (
  <Layout>
    <Hero>
      <HeroTitle>
        {data.site.siteMetadata.title}
        <span className="tagline">A library of cocktail drinks</span>
      </HeroTitle>
    </Hero>
    
    <h2>Categories</h2>
    
    <Nav aria-label="categories">
      <FukolGridList>
        {data.allContentfulCategory.edges.map(({ node }) => (
          <li key={node.id}>
            <div className="card">
              <h3>
                <Link to={`category/${node.slug}`}>
                  {node.name}
                </Link>
              </h3>
            </div>
          </li>
        ))}
      </FukolGridList>
    </Nav>
  </Layout>
);

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulCategory(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;
