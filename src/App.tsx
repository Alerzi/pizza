import react from 'react';
import './App.css';
import {Header} from "@app/common/components/header/header.component"
import {MenuList} from "@app/modules/menu/menu-list/menuList.component"
import {Footer} from "@app/common/components/footer/footer.component"
// import PizzaMenu from "@app/mocks/pizza.json"
import { MenuApi } from "./services/menuApi"

export const App = () => {
  const [menu, setMenu] = react.useState([]);

  react.useEffect(() => {
    MenuApi.getMenu().then(({data}) => {
      setMenu(data.data);
    })
  }, []);

  return (
   <div>
    <Header />
    <MenuList items={menu}/>
    <Footer href="tel:+380441234567" children="044 123 45 67"/>
   </div>
  );
}

