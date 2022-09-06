import { useState } from 'react';

import { ApiClient } from '@services/api.client';
import { SearchPayload, SearchResponse } from '@services/searchService/search.interface';

export const useSearchService = () => {
  const [loading, setLoading] = useState(false);

  const search = async (payload: SearchPayload):
    Promise<SearchResponse> => {
    setLoading(true);

    try {
      const { data } = await ApiClient.get<SearchResponse>(`/search?query=${payload.searchQuery}`);

      return data;
    } catch (error) {
      console.log('errroerrroerrroerrroerrroerrroerrro', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, search };
};
