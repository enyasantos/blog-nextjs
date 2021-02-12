import { Footer } from "../../componets/Footer"
import { Header } from "../../componets/Header"
import { MainContainer } from "../../componets/MainContainer"
import { PostCard } from "../../componets/PostCard"
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
            <PostCard
              key={post.id}
              cover={post.image_url}
              slug={post.slug}
              title={post.title}
            />
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  )
}
