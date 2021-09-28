import Head from 'next/head'
import styles from './layout.module.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  )
}
