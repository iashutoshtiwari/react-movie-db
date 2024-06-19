import axios, { AxiosResponse } from "axios"
import { getTMDBParams } from "../utils/utility"

type Response = {
  page: number
  results: object[]
  total_pages: number
  total_results: number
}

export const getPopularMovies = async (): Promise<Response> => {
  const options = getTMDBParams()
  const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

  const response: AxiosResponse = await axios(url, options)

  return response?.data
}
