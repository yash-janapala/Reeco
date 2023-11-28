import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  box-shadow: 15px 15px 5px 0px #f0f0f0;
  height: 110px;
  width: 100vw;
  display: flex;
  flex-direction: column;
`
export const NavBarLogoContainer = styled.div`
  background-color: ${props => (props.outline ? '#ffffff' : '#004d00')};
  height: ${props => (props.outline ? '70px' : '40px')};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #f2f2f2;
  padding-left: 60px;
  padding-right: 60px;
`
export const GroupLeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 25vw;
  justify-content: space-between;
  align-items: center;
`
export const GroupRightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 15vw;
  padding-right: 30px;
`
export const NavBarLogoHeading = styled.h1`
  font-size: 18px;
  font-family: 'Bree Serif';
  padding-bottom: 6px;
  font-weight: 600;
  cursor: pointer;
  margin: 0px;
`
export const NavBarHeading = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: #fafafa;
  cursor: pointer;
  font-family: 'Roboto';
`

export const NavbarOrderContainer = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  height: 70px;
  justify-content: ${props => (props.outline ? 'flex-start' : 'flex-end')};
`
export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const OrderHeading = styled.p`
  color: ${props => (props.outline ? '#1a1a1a' : '#808080')};
  font-size: 13px;
  padding-right: 10px;
  text-decoration: ${props => (props.outline ? '' : 'underline')};
  margin-top: 5px;
`
export const OrderMainHeading = styled.h1`
  color: #333333;
  font-size: 21px;
  margin: 0px;
  font-weight: 500;
`
export const OrderButton = styled.button`
  outline: none;
  cursor: pointer;
  border: ${props => (props.outline ? '1.5px solid #004d00' : '0px solid ')};
  background-color: ${props => (props.outline ? 'transparent' : '#004d00')};
  color: ${props => (props.outline ? '#004d00' : '#ffffff')};
  font-size: 11px;
  font-weight: 400;
  margin-right: 20px;

  padding-right: 15px;
  padding-left: 15px;
  height: 30px;
  border-radius: 14px;
  font-family: 'Roboto';
  margin-bottom: 6px;
`
