import { Link } from "gatsby";
import React from "react";
import Hero, { HeroTitle } from "../components/Hero";
import Layout from "../components/layout";
import List from "../components/List";

export default ({ data }) => (
  <Layout>
    <Hero>
      <HeroTitle>All Ingredients</HeroTitle>
    </Hero>

    <List>
      {
        data.allContentfulIngredient.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/ingredients/${node.slug}`}>{node.name}</Link>
          </li>
        ))
      }
    </List>
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
