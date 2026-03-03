import {Home, Package, ShoppingCart, Users} from "lucide-react";

const Sidebar = () => {

    return(
        <aside className="">
            <div>
                <span></span>AdminPro
            </div>

            <nav>
                <a href="">
                    Dashboard
                </a>

                <a href="">
                    Products
                </a>
                
                <a href="">
                    Orders
                </a>

                <a href="">
                    Customers
                </a>
            </nav>
        </aside>
    );


};

export default Sidebar;