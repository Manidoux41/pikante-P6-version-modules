import mongoose from "mongoose";


mongoose.set('strictQuery', true);
mongoose.connect(`mongodb+srv://manidev:Noah0410@test-apis.chorlw4.mongodb.net/mongodb-pikante?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});