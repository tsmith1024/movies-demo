import Link from "next/link"
export default function Home(props) {
  const movie = props.movies[6]

  return props.movies.map((movie) => {
    return (
      <h1 key={movie.id}>
        <Link href={`movies/${movie.id}`}>
          {movie.title} - {movie.release_date}
        </Link>
      </h1>
    )
  })
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
