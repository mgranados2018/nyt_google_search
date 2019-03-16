import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  thumbnail = "https://placehold.it/300x300",
  title,
  authors,
  description,
  link,
  rating
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={thumbnail} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h6>Author(s): {authors}</h6>
            <p>Description: {description}</p>
            <a href={link}>Info Link</a>
            <h6>Rating:{rating}</h6>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
