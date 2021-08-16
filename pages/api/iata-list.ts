import { NextApiRequest, NextApiResponse } from 'next'
import { getAirportIataList } from '../../models/airport'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const airportIataList = await getAirportIataList()
    res.status(200).json(airportIataList)
  }
