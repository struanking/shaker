import { Link } from "gatsby";
import React from "react";
import Helmet from "react-helmet";
import Hero, { HeroTitle } from "../components/Hero";
import Layout from "../components/layout";
import List from "../components/List";
import Nav from "../components/nav";

// TODO nullable check, name variable?

export default ({ data }) => (
  <Layout>
    <Helmet>
      <title>{data.allContentfulIngredient.edges[0].node.name}</title>
    </Helmet>

    <Hero>
      <HeroTitle>Ingredient</HeroTitle>
    </Hero>

    <h2>{data.allContentfulIngredient.edges[0].node.name} is used in:</h2>
    
    <Nav aria-label="cocktails">
      <List>
      {
        data.allContentfulCocktail && data.allContentfulCocktail.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/${node.slug}`}>{node.name}</Link>
          </li>
        ))
      }
      </List>
    </Nav>
  </Layout>
);  

export const query = graphql`
  query IngredientQuery($id: String!) {
    allContentfulIngredient(filter: {id: {eq: $id}}) {
      edges {
        node {
          name
        }
      }
    }
    allContentfulCocktail(filter: {tags: {id: {eq: $id}}}) {
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
