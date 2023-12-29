import express, { Request, Response, Application } from "express";
import "dotenv/config";
import morgan from "morgan";
import cors from "cors"
import { establishMongoConnection } from "./db/mongo";
import { middlewareFunction } from "./middleware";
import { customerJourneyRouter } from "./routes/customerJourney";
import { loginRouter } from "./routes/login";
import cluster from "cluster";
import os from "os"

const numCPUs = os.cpus().length;


const app: Application = express();

// Body parsing Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("common"));
app.use(cors({ origin: "*" }))

app.get("/ping", (req: Request, res: Response) => res.status(200).json({ message: "pong" }));

/**
 * middleware
 */

app.use("/login", loginRouter)

app.use(middlewareFunction);


/**
 * Route imports
 */

app.use("/customer-journeys", customerJourneyRouter)

const PORT: number = (process.env.PORT as unknown as number) || 3000;

if (!cluster.isWorker) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });


} else {
    app.listen(PORT, () => {
        establishMongoConnection();
        console.log(`Server is running on PORT ${PORT} 🚀`);
    });

}