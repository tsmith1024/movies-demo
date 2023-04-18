import { GetServerSidePropsContext } from "next"

// props type definition
interface MovieDetailsProps {
  id: string
  name: string
}

// component definition
export default function MovieDetails(props: MovieDetailsProps) {
  return <h1>Movie Details for {props.id}</h1>
}

// server-side props function
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query

  // use the id to fetch movie details

  return {
    props: {
      id,
      name: "Best Movie Ever",
      // whatever goes in here...
    },
  }
}
