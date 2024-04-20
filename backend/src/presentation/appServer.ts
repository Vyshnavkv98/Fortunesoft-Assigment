import express from "express"
import cors from 'cors'
import movieRouter from "../interfaces/routes/movieRouter"
import { dbConnection } from "../infrastructure/dataAccess/dbConfig/connectDb"

export class AppServer{

    public static async run(port:number):Promise<void>{
        const app=express()
        const  DBConnection=new dbConnection()
        DBConnection.connectDb()
        app.use(express.json())
        app.use(cors())
        app.use('/movies',movieRouter)
        app.use('/',movieRouter)

       

        app.listen(port,()=>{
            console.log(`server is running on the port ${port}`);
            
        })
    }
}