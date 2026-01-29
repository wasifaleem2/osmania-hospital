// app/not-found.js
import Image from 'next/image';
import styles from './not-found.module.scss';

export default function NotFound() {
  return (
    <div className={styles.container}>
      {/* Logo at the top */}
      <div className={styles.logoWrapper}>
        <Image 
          src="/assets/img/osmania-logo.png"
          alt="Site Logo"
          width={120}
          height={120}
          className={styles.logo}
        />
      </div>

      <h1 className={styles.title}>404 - Page Not Found</h1>
      <p className={styles.message}>
        Sorry, the page you are looking for does not exist.
      </p>
      <a href="/" className={styles.link}>Go back home</a>
    </div>
  );
}
