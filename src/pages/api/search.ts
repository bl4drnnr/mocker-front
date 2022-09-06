import { NextApiRequest, NextApiResponse } from 'next';

import { Api } from '@api/api';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { data } = await Api.get(`/search?query=${req.query.query}`, {
      auth: {
        username: String(process.env.DATA_API_USERNAME),
        password: String(process.env.DATA_API_PASSWORD)
      }
    });

    return res.json(data);
  } catch (e) {
    console.log(e);
  }
};
