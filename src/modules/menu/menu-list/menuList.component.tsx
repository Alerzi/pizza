import PizzaMenu from "@app/mocks/pizza.json"
import "./menuList.css"
import {MenuItem} from "@app/modules/menu/menu-item/menuItem.component"

export const MenuList = () => {
    return (
        <div className="menu__list">
            {
                PizzaMenu.map(({image, ...pizza}) => (
                    <MenuItem {...pizza} imagePath={image} />
                ))
            }
        </div>
    )
}