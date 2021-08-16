import { NextApiRequest, NextApiResponse } from "next";
import { allAirports } from "../../models/airport";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const airports = await allAirports(req.body);
  res.status(200).json(airports);
};
