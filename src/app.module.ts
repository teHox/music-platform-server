import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";

@Module({
    imports: [
        MongooseModule.forRoot(
            "mongodb+srv://orliksasha123:3tx0JyVtIzmwlrcb@cluster0.w3ygqup.mongodb.net/?retryWrites=true&w=majority"
        ),
        TrackModule,
        FileModule,
    ],
})
export class AppModule {}
