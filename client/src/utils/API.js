import axios from "axios";

export default {
  getBooks: function(query) {
    return axios.get("/api/books", { params: { q: "title" + query} });
  },
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData );
  }
};

