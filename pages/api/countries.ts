import { NextApiRequest, NextApiResponse } from 'next'
import { getCountries } from '../../models/airport'

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const countries = await getCountries()
    res.status(200).json(countries)
  }
