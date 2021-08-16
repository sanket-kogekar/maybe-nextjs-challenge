import { NextApiRequest, NextApiResponse } from 'next'
import { getAirportNames } from '../../models/airport'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const names = await getAirportNames()
    res.status(200).json(names)
  }
