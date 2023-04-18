import MoviePoster from "@/components/MoviePoster"
import type { Movie } from "@/models/movie"

interface MovieListProps {
  movies: Movie[]
}

export default function Home({ movies }: MovieListProps) {
  return (
    <div>
      <div>
        <h1 className="text-4xl font-bold">Now Playing</h1>
        <div>whatever else we want</div>
      </div>
      {movies.map((movie: Movie) => {
        return <MoviePoster key={movie.id} movie={movie} />
      })}
    </div>
  )
}

export async function getServerSideProps() {
  const apiKey = process.env.API_KEY
  if (!apiKey) {
    throw new Error("API_KEY is not defined")
  }

  // new url
  const BASE_URL = "https://api.themoviedb.org/"
  const url = new URL("3/movie/now_playing", BASE_URL)

  // add api key parameter
  url.searchParams.append("api_key", apiKey)

  // fetch data
  const response = await fetch(url.toString())
  // turn into json
  const data = await response.json()
  // return data as props

  console.log(data.results[0])
  return {
    props: {
      movies: data.results,
    },
  }
}
