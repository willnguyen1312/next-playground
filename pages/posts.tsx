import React from 'react'
import { dehydrate, QueryClient, useQuery } from 'react-query'

import Layout from '../components/layout'
import Sidebar from '../components/sidebar'

type Post = {
  body: string
  id: number
  title: string
  userId: number
}

const queryKeys = {
  allPost: ['posts'],
  getPosts: () => [...queryKeys.allPost],
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const result = await res.json()
  return result.slice(0, 10)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function getStaticProps() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(queryKeys.getPosts(), getPosts)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function Posts() {
  // This useQuery could just as well happen in some deeper child to
  // the "Posts"-page, data will be available immediately either way
  const { data } = useQuery(queryKeys.getPosts(), getPosts)

  // This query was not prefetched on the server and will not start
  // fetching until on the client, both patterns are fine to mix
  //   const { data: otherData } = useQuery('posts-2', getPosts)

  if (data) {
    return (
      <section>
        {data.map((item, index) => (
          <p key={item.id}>
            {index + 1}. {item.title}
          </p>
        ))}
      </section>
    )
  }

  return <h1>Loading...</h1>
}

export default Posts

Posts.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
