import React, { useState } from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { AppProps } from 'next/app'
import { ReactQueryDevtools } from 'react-query/devtools'

import '../global.css'

export default function MyApp({
  Component,
  pageProps,
}: AppProps): React.ReactNode {
  const [queryClient] = useState(() => new QueryClient())

  // Use the layout defined at the page level, if available
  const getLayout = (Component as any).getLayout || ((page) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {getLayout(<Component {...pageProps} />)}
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  )
}
