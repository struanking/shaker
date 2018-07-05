import { Link } from "gatsby";
import React from "react";
import Hero, { HeroTitle } from "../components/Hero";
import Layout from "../components/layout";
import List from "../components/List";
import Nav from "../components/nav";

export default ({ data }) => (
  <Layout>
    <Hero>
      <HeroTitle>All Cocktails</HeroTitle>
    </Hero>

    <Nav aria-label="ingredients">
      <List>
        {
          data.allContentfulCocktail.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={`/${node.slug}`}>{node.name}</Link>
              <small className="small">({node.category.name})</small>
            </li>
          ))
        }
      </List>
    </Nav>
  </Layout>
);

export const query = graphql`
  query Allcocktails {
    allContentfulCocktail(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          slug
          category {
            name
          }
        }
      }
    }
  }
`
