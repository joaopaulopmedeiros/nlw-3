import { Request, Response } from "express";

//import Orphanage from "../models/Orphanage";

class OrphanageController {

    static async index(req: Request, res: Response){
        return res.json({
            "msg": "orfanatos"
        }); 
     }
 }

export default OrphanageController; 