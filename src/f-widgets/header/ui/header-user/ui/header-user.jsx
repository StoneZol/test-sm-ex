import styles from './header-user.module.scss'
import MockSvg from './../../../../../f-shared/icons/mock-svg';
import UserMenuItem from './user-menu-item/ui/user-menu-item';

const mockdata = [
    {
        text: 'Онлайн',
        Icon: MockSvg,
        func: () => console.log('click Оплата')
    }, {
        text: 'История',
        Icon: MockSvg,
        func: () => console.log('click Настройки')
    }, {
        text: 'Отчеты',
        Icon: MockSvg,
        func: () => console.log('click Выход')
    },
];

export default function HeaderUser({data}) {
  return (
    <div className={styles.header_user}>
    <div className={styles.user__left_side}>
        Some user data
    </div>
    <div className={styles.user__right_side}>
        {mockdata.map(({text,Icon, func})=>(
            <UserMenuItem key={text} text={text} Icon={Icon} func={func}/>
        ))}
    </div>
    </div>
  )
}