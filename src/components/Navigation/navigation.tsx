import Link from 'next/link'
import styles from './navigation.module.css'

export function Navigation() {
  return (
    <div>
      <Link href="/" className={styles.linkContainer}>
        Home
      </Link>
      <Link href="/register" className={styles.linkContainer}>
        Register
      </Link>
      <Link href="/login" className={styles.linkContainer}>
        Login
      </Link>
    </div>
  )
}
