const express=require('express')
const cors=require("cors")
const rootrouter=require("./routes/index")

const app=express()
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3000;
app.use("/api/v1",rootrouter);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });