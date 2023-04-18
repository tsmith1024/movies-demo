import type { Movie } from "@/models/movie"
import Link from "next/link"
import Image from "next/image"

interface MoviePosterProps {
  movie: Movie
}

export default function MoviePoster({ movie }: MoviePosterProps) {
  const posterSize = "w342"
  const posterURL = `https://image.tmdb.org/t/p/${posterSize}${movie.poster_path}`

  return (
    <div key={movie.id}>
      <Link href={`movies/${movie.id}`}>
        <div>
          <Image
            src={posterURL}
            alt={`Poster image for ${movie.title}`}
            width={342}
            height={750}
            className="rounded-2xl"
          />
        </div>
        <h1 className="bg-red-900 text-3xl font-bold">
          {movie.title} - {movie.release_date}
        </h1>
      </Link>
    </div>
  )
}
