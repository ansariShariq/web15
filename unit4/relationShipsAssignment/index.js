const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 4564;
app.use(express.json());
// mongodb://127.0.0.1:27017/library
// mongodb+srv://shariq_ansari:Shariq@001.@cluster0.kvpqg.mongodb.net/library?retryWrites=true&w=majority
const connect = () => {
  return mongoose.connect("mongodb+srv://shariq_ansari:Shariq%40001.@cluster0.kvpqg.mongodb.net/library");//working fine
};

//book schema

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    body: {
      type: String,
      required: true,
    },
    author_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
    section_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//Book Model

const Book = mongoose.model("book", bookSchema);

//Book Curd

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find().populate([{path:"author_id",select:{"first_name":1,"last_name":1}},{path:'section_id'}]).lean().exec();
    // console.log(books)
    res.status(201).send(books);
  } catch (err) {
    res.send({ message: err.message });
  }
});

app.post("/books", async (req, res) => {
  try {
    const books = Book.create(req.body);
    res.status(201).send(books);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});
app.patch('/books/:id',async (req,res)=>{
  try {
    const books =await Book.findByIdAndUpdate(req.params.id,req.body,{
      new:true
    });
    res.status(201).send(books);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
})
app.delete('/books/:id',async (req,res)=>{
  try {
    const books =await Book.findByIdAndDelete(req.params.id);
    res.status(201).send(books);
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
})

app.get('/books/:id/author',async (req,res)=>{ //all books by an author
  try {
    const books = await Book.find({"author_id":req.params.id}).populate({path:'author_id',select:["first_name"]}).lean().exec()
    res.status(201).send(books);
    
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
})

app.get('/books/:id/section',async (req,res)=>{ //all books in a section
  try {
    const books = await Book.find({"section_id":req.params.id}).populate([{path:'section_id',select:['name']},"author_id"]).lean().exec()
    res.status(201).send(books);
    
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
})

app.get("/books/:s_Id/section/:a_Id",async (req,res)=>{
  try {
    // const books = await Book.find({"section_id":req.params.id}).populate([{path:'section_id',select:['name']}/*,"author_id"*/]).lean().exec()
    const booksInAsectionByOneAuthor =await Book.find({$and:[{"section_id":req.params.s_Id},{'author_id':req.params.a_Id}]}).lean().exec()
    console.log(booksInAsectionByOneAuthor)
    res.status(201).send(booksInAsectionByOneAuthor);
    
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
})
//Author schema

const authorSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//Author Model

const Author = mongoose.model("author", authorSchema);

//Authopr Cred
app.get("/authors", async (req, res) => {
  try {
    const author = await Author.find().lean().exec();

    // console.table(author);
    res.status(200).send(author);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
app.post("/authors", async (req, res) => {
  try {
    const author = await Author.create(req.body);

    // console.log(author);
    res.status(200).send(author);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});
//section schema

const sectionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

//Section Model

const Section = mongoose.model("section", sectionSchema);

//Curd of section

app.get("/sections", async (req, res) => {
  try {
    const sections = await Section.find().lean().exec();
    // console.log(sections)
    res.status(201).send(sections);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.post("/sections", async (req, res) => {
  try {
    const section = Section.create(req.body);
    // console.log(section)
    res.status(201).send(section);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

app.listen(port, async () => {
  await connect();
  console.log("listening at port " + port);
});
