import Book from "../models/Book.js";



export const createBook = async(req,res)=>{
    const book = await Book.create(req.body)
    if(book){
      res.status(200);
      res.json(book)
    }else{
      res.status(500);
      throw new Error("Creating Book Failed")
    }
  }

  
  export const findBook = async(req,res)=>{
    const book = await Book.find({})
    if(book){
      res.status(200);
      res.json(book)
    }else{
      res.status(500);
      throw new Error("No Books Available")
    }
  }

  export const   updateBook= async(req,res)=>{
    try {
        const { bookId } = req.params;
        const updates = req.body;
        const options = { new: true };

        const book = await Book.findByIdAndUpdate(bookId, updates, options);

        if (book) {
            res.status(200).json(book);
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
  }


  export const deleteBook = async (req, res) => {
    try {
        const { bookId } = req.params;

        const deletedBook = await Book.findByIdAndDelete(bookId);

        if (deletedBook) {
            res.status(200).json({ message: "Book deleted successfully" });
        } else {
            res.status(404).json({ message: "Book not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};