
# React MovieDB

A simple application fetching a list of popular movies from TMDB API.


## Demo

https://reactmdb.vercel.app/


## API Reference

#### Get popular movies

```http
  GET https://api.themoviedb.org/3/movie/popular

```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_token` | `string` | **Required**. API token |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`VITE_TMDB_API_TOKEN`


## Run Locally

Clone the project

```bash
  git clone https://github.com/iashutoshtiwari/react-movie-db.git
```

Go to the project directory

```bash
  cd react-movie-db
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```


## Authors

- [@iashutoshtiwari](https://github.com/iashutoshtiwari)

