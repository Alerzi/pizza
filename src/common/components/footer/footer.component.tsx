import { FC, PropsWithChildren } from "react";
import "./footer.css"
import { pic1 } from "@app/pictures"

interface FooterLinkProps {
    href: string;
}

export const Footer: FC<FooterLinkProps & PropsWithChildren> = ({href, children}) => {
    return (
        <div className="footer">
            <div className="footer__text">КОНТАКТЫ</div>
            <div className="footer__phone"><a href={href}>{children}</a></div>
            <div className="footer__email">info@pizzastack.app</div>
            <hr />
            <div className="footer__title"><a href="localhost://3000"><img src={pic1} alt="pizza" />PizzaStack</a></div>
        </div>
    )
}