import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import FukolGridList from "../components/FukolGridList";
import Hero, { HeroTitle } from "../components/Hero";
import Layout from "../components/layout";
import Nav from "../components/nav";

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>All Categories</title>
    </Helmet>

    <Hero>
      <HeroTitle>All Categories</HeroTitle>
    </Hero>


    <Nav aria-label="categories">
      <FukolGridList>
      {
        data.allContentfulCategory.edges.map(({ node }) => (
          <li key={node.id}>
            <div className="card">
              <h3>
                <Link to={`/category/${node.slug}`}>
                  {node.name}
                  <small className="small">
                    ({node.cocktail === null ? '0' : node.cocktail.length})
                  </small>
                </Link>
              </h3>
            </div>
          </li>
        ))
      }
      </FukolGridList>
    </Nav>
  </Layout>
);

export const query = graphql`
  query Allcategories {
    allContentfulCategory(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          slug
          cocktail {
            id
          }
        }
      }
    }
  }
`
