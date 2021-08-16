import { NextApiRequest, NextApiResponse } from 'next'
import { getCities } from '../../models/airport'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const cities = await getCities()
    res.status(200).json(cities)
  }
