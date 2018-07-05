import { Link } from "gatsby";
import React from "react";
import Hero, { HeroTitle } from "../components/Hero";
import Layout from "../components/layout";
import List from "../components/List";

export default ({ data }) => (
  <Layout>
    <Hero>
      <HeroTitle>Ingredient</HeroTitle>
    </Hero>

    <h2>Cocktails used in</h2>
    
    <List>
    {
      data.allContentfulCocktail && data.allContentfulCocktail.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={`/${node.slug}`}>{node.name}</Link>
        </li>
      ))
    }
    </List>
  </Layout>
);  

export const query = graphql`
  query IngredientQuery($id: String!) {
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
