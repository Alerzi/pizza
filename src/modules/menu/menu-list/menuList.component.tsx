// import PizzaMenu from "@app/mocks/pizza.json" //получение пицц с файла
import "./menuList.css"
import {MenuItem} from "@app/modules/menu/menu-item/menuItem.component"
import {Pizza} from "@app/modules/menu/types/pizza"
import {FC} from "react"

interface MenuListProps {
    items: Pizza[];
}

export const MenuList: FC<MenuListProps> = ({items}) => {
    return (
        <div className="menu__list">
            {
                items.map(({image, ...pizza}) => (
                    <MenuItem {...pizza} imagePath={image} key={`pizza-${pizza.id}`} />
                ))
            }
        </div>
    )
}