const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

//middleware
app.use(express.json());

// Database connect
const connectWithDb = require("./config/database");
connectWithDb();

// Mount
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const interestRoutes = require('./routes/interestRoutes');
const loadCategories = require("./utils/loadCategories");
const path = require('path');
const cors = require('cors');

loadCategories();

app.use(cors({
   origin: ['http://localhost:5173', 'https://e-com-nine-tau.vercel.app'],
   credentials: true
}));

// const _dirname = path.resolve();

app.use('/api/user', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/interests', interestRoutes);
// app.use(express.static(path.join(_dirname,"/frontend/dist")))
// app.get('*',(_,res)=>{
//     res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"));
// })

//start server
app.listen(PORT, () => {
   console.log(`App running successfully at ${PORT}`);
})

// app.get("/", (req, res) => {
//    res.send(`<h1>This is homepage</h1>`);
// })