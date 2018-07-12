import React from "react";
import Helmet from "react-helmet";
import styled from "styled-components";
import Hero, { HeroTitle } from "../components/Hero";
import Layout from "../components/layout";

// TODO Change "panel" to "ingredients", "method"?

const Container = styled.div`
  margin: 1.5rem auto;
  max-width: 36em;
  width: 100%;
`;

const Panel = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 3rem;
  }
`;

const PanelTitle = styled.h2`
  border-bottom: solid 1px #dadada;
  font-weight: normal;
  margin-bottom: 0;
  padding: 0 1rem 0.25rem;
`;

const PanelBody = styled.div`
  margin: 0.5rem 0 0;
  padding: 0;
  max-width: 20em;

  > p {
    text-align: center;
  }
`;

const PanelList = styled.ul`
  list-style-type: square;
  margin: auto;
`;

const Cocktail = ({ category, id, ingredientsJson, method, name }) => (
  <>
    <Helmet>
      <title>{name}</title>
      <meta name="description" content={`${name} - ${category.name} cocktail`} />
      <meta name="keywords" content={`${name} ${category.name}`} />
    </Helmet>

    <Hero>
      <HeroTitle>{name}</HeroTitle>
    </Hero>
    
    <Container>
      <Panel>
        <PanelTitle>Ingredients</PanelTitle>
        <PanelBody>
          <PanelList>
          {ingredientsJson.ingredients.map(({ ingredient, measure }) => (
            <li key={`${ingredientsJson.id}_${ingredient}`}>
              {measure} {ingredient}
            </li>
          ))}
        </PanelList>
        </PanelBody>
      </Panel>

      <Panel>
        <PanelTitle>Directions</PanelTitle>
        <PanelBody>
          <p>{method}</p>
        </PanelBody>
      </Panel>
    </Container>
  </>
);

export default ({ data }) => (
  data.allContentfulCocktail.edges.map(({ node }) => (
    <Layout>
      <Cocktail key={node.id} {...node} />
    </Layout>
  ))
);  

export const query = graphql`
  query CocktailQuery($id: String!) {
    allContentfulCocktail(filter: { id: { eq: $id } }) {
      edges {
        node {
          id
          name
          method
          category {
            name
          }
          ingredientsJson {
            id
            ingredients {
              measure
              ingredient
            }
          }
        }
      }
    }
  }
`;
