import express from 'express';

const app = express();


//configure the app for requests....

//route to our files/endpoints
app.get("/", (req, res) => res.send("Hello, World!"));

//start the server
//PORT is a constant so all caps
const PORT = 8000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
