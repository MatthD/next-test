import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}

export const getStaticProps: GetStaticProps = async function getStaticProps({params}) {
  return {
    props: {
      posts: [{id: 1, title: 'horror Movie'}, {id: 2, title: 'LOTR'}]
    }
  }
}

export default Blog;
