import Image from 'next/image';
import styles from './styles.module.css';

export default () =>
  <div className={styles['first-screen']}>
    <div className={styles.left}>
      <a href="#" className={styles.logo}>
        <img src="/images/logo.svg" className={styles['logo-img']} />
        <span className={styles['logo-text']}>ПензГидроМаш</span>
      </a>
      <div className={styles.breadcrumbs}>
        <a href="#" className={styles['breadcrumbs-link']}>Главная</a>
        <img src="/images/breadcrumbs-arrow.svg" className={styles['breadcrumbs-arrow']} />
        <a href="#" className={styles['breadcrumbs-link']}>Компания</a>
      </div>
      <div className={styles.company}>Компания</div>
      <div className={styles.text}>
        Основная сфера деятельности &laquo;ПензГидромаш&raquo;&nbsp;&mdash;  создание систем для нефтяной, газовой, химической  и&nbsp;нефтехимической сфер промышленности.
      </div>
    </div>
    <div className={styles.right}>
      <div className={styles.menu}>
        <a href="#" className={`${styles['menu-link']} ${styles['menu-link_active']}`}>Компания</a>
        <a href="#" className={styles['menu-link']}>продукты и услуги</a>
        <a href="#" className={styles['menu-link']}>проекты</a>
        <a href="#" className={styles['menu-link']}>новости</a>
        <a href="#" className={styles['menu-link']}>контакты</a>
      </div>
    </div>
  </div>