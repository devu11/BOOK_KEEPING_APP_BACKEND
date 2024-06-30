import express from "express"
import dbConnect from "./config/dbConnect.js"
import { config } from 'dotenv';
import cors from 'cors'; 
import BooksRoute from './routes/BooksRoute.js'
import AuthRoute from './routes/AuthRoute.js'
// import { protect, admin } from "./controllers/AuthController.js";
config();
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, 
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));
app.use(cors());

app.use(express.json())
// mongoose connect 
dbConnect();



app.use('/auth', AuthRoute);
app.use('/book', BooksRoute);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started Running ${PORT}`);
});
