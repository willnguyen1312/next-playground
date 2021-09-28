import Link from 'next/link'
import styles from './sidebar.module.css'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </nav>
  )
}
