import Orphanage from "../models/Orphanage";

import imageView from "./images";

export default {
  render(orphanage: Orphanage) {
    const {
      id,
      name,
      latitude,
      longitude,
      instructions,
      about,
      open_on_weekends,
      opening_hours,
      images
    } = orphanage;

    return {
      id,
      name,
      latitude,
      longitude,
      instructions,
      about,
      open_on_weekends,
      opening_hours,
      images: imageView.renderMany(images)
    };
  },

  renderMany(orphanages: Orphanage[]) {
    return orphanages.map((orphanage) => this.render(orphanage));
  },
};
