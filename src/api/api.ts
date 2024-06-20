import axios, { AxiosResponse, AxiosError } from "axios"
import { getTMDBParams } from "../utils/utility"

type Response = {
  status: number
  data: any
}

export const getPopularMovies = async (): Promise<Response> => {
  const options = getTMDBParams()
  const url = "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"

  try {
    const response: AxiosResponse = await axios.get(url, options)

    if (response.status !== 200) {
      throw new Error(`Request failed with status ${response.status}`)
    }
    return response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError
      if (axiosError.response) {
        return {
          status: axiosError.response.status,
          data: axiosError.response.data
        }
      } else if (axiosError.request) {
        return {
          status: 500,
          data: "The data could not be retrieved at this moment, please try again later."
        }
      } else {
        return {
          status: 500,
          data: axiosError.message
        }
      }
    } else {
      return {
        status: 500,
        data: error
      }
    }
  }
}
