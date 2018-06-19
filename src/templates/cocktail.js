import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import Hero, { HeroTitle } from "../components/Hero";

const Container = styled.div`
  margin: 1.5rem auto;
  max-width: 32em;
  width: 100%;
`;

const Panel = styled.div`
  & + & {
    margin-top: 3rem;
  }
`;

const PanelTitle = styled.h2`
  border-bottom: solid 1px #f2f2f2;
  font-weight: normal;
  margin-bottom: 0;
  padding-bottom: 0.5rem;
`;

const PanelBody = styled.div`
  margin: 0;
  margin-top: 0.5rem;
  padding: 0;
`;

const PanelList = styled.ul`
  list-style-type: square;
`;

const Cocktail = ({ category, id, ingredientsJson, method, name }) => (
  <div>
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
              {measure} <Link to={ingredient}>{ingredient}</Link>
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
  </div>
);

export default ({ data }) => (
  <div>
  {
    data.allContentfulCocktail.edges.map(({ node }) => <Cocktail key={node.id} {...node} />)
  }
  </div>
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
