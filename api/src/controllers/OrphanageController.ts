import { Request, Response } from "express";

import { getRepository } from "typeorm";

import Orphanage from "../models/Orphanage";

export default {
  async index(req: Request, res: Response) {
    return res.json({
      msg: "orfanatos",
    });
  },

  async post(req: Request, res: Response) {
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
            open_on_weekends
        });
       
      await orphanagesRepository.save(orphanage);
      
      return res.json({
        "orfanato":orphanage,
      });

    } catch (error) {
      return res.json({
        "error": error,
      });
    }
  },
};
