import styled from 'styled-components'

const getStatusColor = status => {
  switch (status) {
    case 'Approved':
      return 'green'

    case 'Missing - Urgent':
      return 'red'

    case 'Missing':
      return 'orange'

    default:
      return 'white'
  }
}

const iconColors = status => {
  switch (status) {
    case 'Approved':
      return {check: 'green', close: 'black'}
    case 'Missing':
      return {check: 'black', close: 'orange'}
    case 'Missing - Urgent':
      return {check: 'black', close: 'red'}

    default:
      return {check: 'black', close: 'black'}
  }
}

export const ReccoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`

export const ListsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
  margin-right: 60px;
  margin-top: 10px;
  padding: 20px;
  border-radius: 6px;
  border: 1px solid #bfbfbf;
  border-bottom: none;
`

export const ListsRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid #bfbfbf;
  height: 30px;
  width: 360px;
  justify-content: space-between;
  align-items: center;
  padding-left: 15px;
  border-radius: 14px;
  padding-right: 12px;
  font-size: 24px;
  color: #bfbfbf;
  font-weight: 600;
`
export const Search = styled.input`
  font-size: 12px;
  border: none;
  outline: none;
  width: 300px;
`
export const AddItemOrPrintContainer = styled.div`
  display: flex;
  width: 130px;
  justify-content: space-between;
  align-items: center;
  color: #99ff99;
  font-size: 24px;
  font-weight: 200;
`
export const AddItemButton = styled.button`
  border: 1px solid #009900;
  background-color: transparent;
  cursor: pointer;
  height: 28px;
  width: 86px;
  color: #009900;
  font-size: 12px;
  font-family: 'Roboto';
  font-weight: 600;
  border-radius: 14px;
`

export const ListKeysRowContainer = styled.div`
  display: flex;
  border: 1px solid #bfbfbf;
  margin-top: 15px;
  border-top-right-radius: 5px;
  padding-left: 70px;
  border-top-left-radius: 5px;
`
export const ProductHeading = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #737373;
  margin-right: 17px;
  font-weight: 400;
  margin: 5px;
  width: 270px;
  //   margin-left: ${props => (props.outline ? '50px' : '')};
`
export const ProductBrand = styled(ProductHeading)`
  width: 100px;
`
export const ProductPrice = styled(ProductHeading)`
  width: 70px;
`
export const ProductQuantity = styled(ProductHeading)`
  width: 70px;
`
export const ProductTotal = styled(ProductHeading)`
  width: 70px;
`
export const ProductStatus = styled(ProductHeading)`
  width: 120px;
  height: 23px;
  margin-left: 10px;
  font-size: ${props => (props.outline ? '14px' : '12px')};
  margin-right: 10px;
  color: ${props => (props.outline ? '#4d4d4d' : '#ffffff')};
  outline: none;
  font-weight: ${props => (props.outline ? '400' : '300')};
  border-radius: 14px;
  padding-top: 3px;
  text-align: center;
  background-color: ${props => getStatusColor(props.status)};
`

export const ProductDetailsContainer = styled.div`
  border-bottom: 1px solid #bfbfbf;
  display: flex;
  align-items: center;
`

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  margin-left: 10px;
  margin-right: 10px;
`
export const StatusButton = styled.button`
  outline: none;
  cursor: pointer;
  width: 50px;
  background-color: transparent;
  border: none;
  color: #333333;
  font-family: 'Roboto';
  font-size: ${props => (props.outline ? '13px' : '16px')};
`
export const FiCheckIcon = styled.a`
  color: ${props => iconColors(props.status).check};
`
export const MdCloseIcon = styled.a`
  color: ${props => iconColors(props.status).close};
`

export const PopupContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  padding-top: 10px;
`
export const ConfirmationRowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
export const StatusPopupHeading = styled.h1`
  font-size: 20px;
  font-family: 'Roboto';
  color: #262626;
`
export const StatusPopupDescription = styled.p`
  font-size: 14px;
  font-family: 'Roboto';
  color: #737373;
`
export const StatusPopupBtnContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`
