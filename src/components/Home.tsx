import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Books } from "./Books";
import { useState } from "react";
import "../styles/home.css";
import { Button } from "./Button/Button";

const Home = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const books = useQuery(api.queries.getBooks);
  const createBooks = useMutation(api.queries.createBooks);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    createBooks({ title, author })
      .then(() => {
        console.log("created");
        setTitle("");
        setAuthor("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="main-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="book title"
          className="form-control mb-2"
        />
        <input
          type="text"
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="book author"
          className="form-control mb-2"
        />
        <Button onClick={() => {}} text="Enviar" typeBtn="success" />
      </form>
      {books ? <Books books={books} /> : "Loading..."}
    </div>
  );
};

export default Home;
