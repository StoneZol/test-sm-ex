import HeaderMenu from './header-menu/ui/header-menu'
import HeaderUser from './header-user/ui/header-user'
import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.header}>
        <HeaderMenu/>
        <HeaderUser/>
    </header>
  )
}
