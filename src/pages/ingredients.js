import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import Hero, { HeroTitle } from "../components/Hero";
import Layout from "../components/layout";
import List from "../components/List";
import Nav from "../components/nav";

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>All Ingredients</title>
    </Helmet>

    <Hero>
      <HeroTitle>All Ingredients</HeroTitle>
    </Hero>

    <Nav aria-label="ingredients">
      <List>
        {
          data.allContentfulIngredient.edges.map(({ node }) => (
            <li key={node.id}>
              <Link to={`/ingredients/${node.slug}`}>{node.name}</Link>
            </li>
          ))
        }
      </List>
    </Nav>
  </Layout>
);

export const query = graphql`
  query Allingredients {
    allContentfulIngredient(sort: { fields: [name], order: ASC }) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`
