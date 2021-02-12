import { Header } from "../../componets/Header"
import { MainContainer } from "../../componets/MainContainer"
import { PostData } from "../../domain/posts/post"
import { Container } from "./styles"

export type HomePageProps = {
  posts: PostData[]
}

export default function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <h2 key={post.id}>{post.title}</h2>
          ))}
        </Container>
      </MainContainer>
    </>
  )
}