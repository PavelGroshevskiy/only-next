import styles from './styles.module.css';
import FirstScreen from '../FirstScreen';
import AboutUs from '../AboutUs';
import Transport from '../Transport';

export default () =>
  <div className={styles.layout}>
    <div className={styles.left}>
      <FirstScreen />
      <AboutUs />
      <Transport />
    </div>
    <div className={styles.right}>
      <div className={styles.burger}></div>
      <div className={styles['burger-text']}>меню</div>
      <img src="/images/scroll.svg" className={styles.scroll} />
      <img src="/images/scroll-top-arrow.svg"
        className={styles['scroll-top-arrow']}
        onClick={() => window.scrollTo({top: 0})}
      />
    </div>
  </div>