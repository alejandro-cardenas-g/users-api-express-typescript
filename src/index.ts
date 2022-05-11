import "reflect-metadata";
import app from "./app";
import { AppDataSource } from "./db";

// const main = async() => {
//     app.listen(3000, () => {
//         console.log('Server is listening on port', 3000);
//     });
// }

// main();

app.listen(3000, async() => {
    try {
        await AppDataSource.initialize();
        console.log('Database is connected');
        console.log('Server is listening on port', 3000);
    } catch (error) {
        console.log(error);
    }

});