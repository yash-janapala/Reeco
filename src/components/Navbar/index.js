import {FaShoppingCart} from 'react-icons/fa'
import {MdKeyboardArrowDown} from 'react-icons/md'
import {
  NavBarContainer,
  NavBarLogoContainer,
  GroupLeftContainer,
  NavBarLogoHeading,
  NavBarHeading,
  GroupRightContainer,
  NavbarOrderContainer,
  RowContainer,
  OrderHeading,
  OrderMainHeading,
  OrderButton,
} from './MyStyledComponents'

const Navbar = () => (
  <NavBarContainer>
    <NavBarLogoContainer>
      <GroupLeftContainer>
        <NavBarLogoHeading>Recco</NavBarLogoHeading>
        <NavBarHeading>Store</NavBarHeading>
        <NavBarHeading>Orders</NavBarHeading>
        <NavBarHeading>Analytics</NavBarHeading>
      </GroupLeftContainer>
      <GroupRightContainer>
        <FaShoppingCart style={{transform: 'scaleX(-1)'}} />
        <NavBarHeading>
          Hello, James <MdKeyboardArrowDown />
        </NavBarHeading>
      </GroupRightContainer>
    </NavBarLogoContainer>

    <NavBarLogoContainer outline>
      <NavbarOrderContainer outline>
        <RowContainer>
          <OrderHeading outline>Orders {'>'} </OrderHeading>
          <OrderHeading> Order 32457ABC</OrderHeading>
        </RowContainer>
        <OrderMainHeading>Order 32457ABC</OrderMainHeading>
      </NavbarOrderContainer>

      <NavbarOrderContainer>
        <RowContainer>
          <OrderButton outline>Back</OrderButton>
          <OrderButton>Approve order</OrderButton>
        </RowContainer>
      </NavbarOrderContainer>
    </NavBarLogoContainer>
  </NavBarContainer>
)

export default Navbar
