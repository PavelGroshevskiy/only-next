import { useState } from 'react';
import styles from './styles.module.css';

export default () => {
  const [imagePath, setImagePath] = useState('/images/truck.jpg');
  return <div>
    <div className={styles.top}>Транспорт</div>
    <div className={styles.bottom}>
      <img src={imagePath} className={styles['bottom-left']} />
      <div className={styles['bottom-right']} onMouseLeave={() => setImagePath('/images/truck.jpg')}>
        <div className={styles['bottom-right-item']} onMouseEnter={() => setImagePath('/images/hire-me-pls.jpg')}>
          <div className={styles['bottom-right-title']}>Автотранспорт</div>
          <ul>
            <li>Собственная автотранспортная компания</li>
            <li>Перевозка негабаритных и тяжеловесных грузов</li>
            <li>Доставка в любую точку России</li>
          </ul>
        </div>
        <div className={styles['bottom-right-item']} onMouseEnter={() => setImagePath('/images/truck-mirror-y.jpg')}>
          <div className={styles['bottom-right-title']}>Железнодорожный<br/>транспорт</div>
          На заводе имеется ж/д ветка, заходящая в производственное здание
        </div>
      </div>
    </div>
  </div>
};