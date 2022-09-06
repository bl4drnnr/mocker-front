interface Endpoint {
  name: string;
}

export interface SearchPayload {
  searchQuery: string;
}

export interface SearchResponse {
  result: Endpoint[]
}
