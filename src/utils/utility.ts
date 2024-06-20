type Options = {
  method: string
  headers: {
    accept: string
    Authorization: string
  }
}

export const getTMDBParams = () => {
  const options: Options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
    }
  }

  return options
}

export const extractYear = (dateString: string): number => {
  const date = new Date(dateString)
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date string")
  }
  return date.getFullYear()
}
