import { Book } from "../models/bookModel.js";

export const addBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send("all fields are required");
    }
    const book = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };
    const newBook = await Book.create(book);
    return res.status(201).json({ message: "Book created", data: newBook });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json({ count: books.length, data: books });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

export const findBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

export const updateBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send("all fields are required");
    }
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(401).send("book not found");
    }
    return res.status(200).json({ message: "book apdated successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};

export const deleteBook = async (req, res) => {
  try { 
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id);
    if (!result) {
      return res.status(401).send("book not found");
    }
    return res.status(200).json({ message: "book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send(error.message);
  }
};
