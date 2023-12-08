import { NestFactory } from "@nestjs/core";
import * as process from "process";
import { AppModule } from "./app.module";
import * as express from "express";

const start = async () => {
    try {
        const PORT = process.env.PORT || 5000;
        const app = await NestFactory.create(AppModule);
        app.use(express.static(__dirname + "/static"));
        app.enableCors();
        await app.listen(PORT, () => console.log(`server started on PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();
