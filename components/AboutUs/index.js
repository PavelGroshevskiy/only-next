import styles from './styles.module.css';

export default () =>
  <div>
    <div className={styles.top}>
      <div className={styles['top-left']}>О нас</div>
      <div className={styles['top-right']}>Наша цель&nbsp;&mdash; взаимовыгодное сотрудничество на&nbsp;основе долгосрочных контрактов.<br/>Мы&nbsp;представлены на&nbsp;рынке с&nbsp;2006 года и&nbsp;не&nbsp;перестаем развиваться, совершенствовать качество своих услуг, оптимизировать затраты для снижения стоимости продукции.</div>
    </div>
    <div className={styles.bottom}>
      <img className={styles['bottom-left']} src="/images/gas.jpg" />
      <div className={styles['bottom-right']}>
        Выполняем все работы по&nbsp;проектированию систем, закупке необходимых материалов, производству, установке, наладке, гарантийному и&nbsp;внегарантийному обслуживанию. Уникальный парк оборудования позволяет находить решения для любых производственных задач клиентов.<br/><br/>
        Также мы&nbsp;берем на&nbsp;себя все сложности, связанные с&nbsp;сертификацией нестандартного оборудования. В&nbsp;этом процессе принимают участие инженеры и&nbsp;юристы с&nbsp;многолетним опытом работы. Клиенты получают все нужные документы для того, чтобы использование оборудования было полностью законным.<br/><br/>
        Выпускаемая нашей компанией продукция разрешена к&nbsp;применению Ростехнадзором.<br/>На&nbsp;производстве внедрен жесткий менеджмент качества&nbsp;&mdash; по&nbsp;международному стандарту ГОСТ Р&nbsp;ИСО 9001.
      </div>
    </div>
  </div>