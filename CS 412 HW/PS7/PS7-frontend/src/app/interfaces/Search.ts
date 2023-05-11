
export class Response {
  searchResults: SearchMovieResponse | undefined;
  cache: boolean | undefined;
}
export class SearchMovieResponse {
  page: number | undefined;
  results: movieDetails[] | undefined;
  total_results: number | undefined;
  total_pages: number | undefined;
}
interface movieDetails {
  poster_path: string | undefined;
  adult: boolean | undefined;
  overview: string | undefined;
  release_date: string | undefined;
  genre_ids: number[] | undefined;
  id: number | undefined;
  original_title: string | undefined;
  original_language: string | undefined;
  title: string | undefined;
  backdrop_path: string | undefined;
  popularity: number | undefined;
  vote_count: number | undefined;
  video: boolean | undefined;
  vote_average: number | undefined;

}
