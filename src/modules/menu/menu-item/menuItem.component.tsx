import "./menuItem.css"
import {FC} from "react"

interface MenuItemProps {
    imagePath: string;
    weight: number;
    title: string;
    ingredients: string;
    price: number;
}

export const MenuItem: FC<MenuItemProps> = ({ imagePath, weight, title, ingredients, price }) => {
    return (
        <div className="menu__item">
            <div className="menu__item-img">
                <img src={require(`@app/img/${imagePath}`)} alt="img" />
                <div className="menu__item-weight">{weight} г</div>
            </div>
            <div className="menu__item-content">
                <div className="menu__item-title"><h3>{title}</h3></div>
                <div className="menu__item-text">
                    <p>{ingredients}</p>
                </div>
                <div className="menu__item-price">$ {price}</div>
            </div>
        </div>
    )
}