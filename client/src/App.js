import React, { Component } from "react";
import Jumbotron from "./components/Jumbotron";
import Nav from "./components/Nav";
import Input from "./components/Input";
import Button from "./components/Button";
import API from "./utils/API";
import { BookList, BookListItem } from "./components/BookList";
import { Container, Row, Col } from "./components/Grid";

class App extends Component {
  state = {
    books: [],
    bookSearch: ""
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.getBooks(this.state.bookSearch)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  saveBook = id => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state

    API.saveBook(id)
      .then(window.location.reload())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <div>
        <Nav />
        <Jumbotron />
        <Container>
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="bookSearch"
                        value={this.state.bookSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Book"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button
                        onClick={this.handleFormSubmit}
                        type="success"
                        className="input-lg"
                      >
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>
          <Row>
            <Col size="xs-12">
              {!this.state.books.length ? (
                <h1 className="text-center">No Books to Display</h1>
              ) :
                (
                  <BookList>
                    {this.state.books.map(book => {
                      return (
                        <Row>
                          <Col size="xs-9 sm-10">
                            <BookListItem
                              key={book.id}
                              title={book.volumeInfo.title}
                              authors={book.volumeInfo.authors}
                              description={book.volumeInfo.description}
                              link={book.volumeInfo.infoLink}
                              rating={book.volumeInfo.averageRating}
                              thumbnail={book.volumeInfo.imageLinks.thumbnail}
                            />
                          </Col>
                          <Col size="xs-4 sm-2">
                            <Button
                              onClick={() => this.saveBook(book._id)}
                              type="success"
                              className="input-lg"
                            >Save
                          </Button>
                          </Col>
                        </Row>
                      );
                    })}
                  </BookList>
                )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
