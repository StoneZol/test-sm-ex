import MockSvg from '../../../../../f-shared/icons/mock-svg'
import styles from './header-menu.module.scss'
import MenuItem from './menu-item/ui/menu-item'

const mockdata = [
    {
        text: 'Онлайн',
        Icon: MockSvg,
        func: () => console.log('click Онлайн')
    }, {
        text: 'История',
        Icon: MockSvg,
        func: () => console.log('click История')
    }, {
        text: 'Отчеты',
        Icon: MockSvg,
        func: () => console.log('click Отчеты')
    }, {
        text: 'События',
        Icon: MockSvg,
        func: () => console.log('click События')
    }, {
        text: 'АЗС',
        Icon: MockSvg,
        func: () => console.log('click АЗС')
    }, {
        text: 'ТО',
        Icon: MockSvg,
        func: () => console.log('click ТО')
    }
];


export default function HeaderMenu() {
    
  return (
    <div className={styles.header_menu}>
        {mockdata.map(({text, func, Icon})=>(
            <MenuItem key={text} text={text} func={func} Icon={Icon}/>
        ))}
    </div>
  )
}
