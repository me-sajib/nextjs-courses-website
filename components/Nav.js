import Link from "next/link";
import styles from "../styles/Nav.module.css";
const Nav = () => {
  return (
    <div className={styles.topnav} id="myTopnav">
      <nav>
        <Link href="/">
          <a className="active">Home </a>
        </Link>
        <Link href="/blog">
          <a>Blog </a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </nav>
    </div>
  );
};

export default Nav;
