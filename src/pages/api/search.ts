import { NextApiRequest, NextApiResponse } from 'next';

import { Api } from '@api/api';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  try {
    const { data } = await Api.get(`/search?query=${req.query.query}`);

    return res.json(data);
  } catch (e) {
    console.log('eeeeeeeeeeeeeeeeeeee',e);
    console.log(e);
  }
};
