import "./header.css"

import { pic1 } from "@app/pictures"

export const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <a href="localhost://3000"><img src={pic1} alt="pizza" />PizzaStack</a>
            </div>
        </div>
    )
}