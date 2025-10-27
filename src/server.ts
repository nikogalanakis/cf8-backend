import {connectDB} from "./utils/db";
import app from "./app";

const port = process.env.PORT || 3000;

const strart = async() => {
  
  await connectDB();
  app.listen(port, () =>{
  console.log("Server is running on port ",port);
})
}
strart();
