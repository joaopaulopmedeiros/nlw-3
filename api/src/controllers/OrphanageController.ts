import { Request, Response } from "express";

import { getRepository } from "typeorm";

import Orphanage from "../models/Orphanage";

class OrphanageController {
    static async index(req: Request, res: Response) {
        try {
          const orphanagesRepository = getRepository(Orphanage);
          const orphanages = await orphanagesRepository.find();
          return res.status(200).json(orphanages);
        } catch (error) {
          res.status(500).json({
            error: error,
          });
        }
      }

      static async show(req: Request, res: Response){
        try {
            const { id } = req.params;

            const orphanagesRepository = getRepository(Orphanage);

            const orphanage = await orphanagesRepository.findOneOrFail(id);

            return res.status(200).json(orphanage);

        } catch (error) {
            res.status(500).json({
                "error": error
            })
        }
      }
    
      static async post(req: Request, res: Response) {
        try {
          const {
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
          } = req.body;
    
          const orphanagesRepository = getRepository(Orphanage);
    
          const orphanage = orphanagesRepository.create({
            name,
            latitude,
            longitude,
            about,
            instructions,
            opening_hours,
            open_on_weekends,
          });
    
          await orphanagesRepository.save(orphanage);
    
          return res.status(201).json({
            orfanato: orphanage,
          });
        } catch (error) {
          return res.status(500).json({
            error: error,
          });
        }
      }
}

export default OrphanageController;
