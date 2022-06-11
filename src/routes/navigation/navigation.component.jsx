
import React from "react";
import { Outlet } from "react-router-dom";
import { Fragment, useContext } from "react";
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation.styles";
import { ReactComponent as Logo} from '../../assets/crown.svg'
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";
import { singOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext);

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to = "/">
                    <Logo className="logo" />
                </LogoContainer>
                <NavLinks>
                    <NavLink to="/shop">SHOP</NavLink>
                    <NavLink to="/shop">CONTACT</NavLink>
                    {
                        currentUser ? (
                        <NavLink as='span' onClick={ singOutUser }>SIGN OUT</NavLink>
                        ) : (
                        <NavLink to = '/signin'>SIGN IN</NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;