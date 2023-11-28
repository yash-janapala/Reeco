import {Component} from 'react'
import {MdSearch, MdClose} from 'react-icons/md'
import {FiPrinter, FiCheck} from 'react-icons/fi'
import Popup from 'reactjs-popup'
import fetchData from '../../api'
import 'reactjs-popup/dist/index.css'
import Apple from '../../Apple Green Smith.png'
import Navbar from '../Navbar'
import CheckOutTotal from '../CheckOutTotal'
import {
  ReccoContainer,
  ListsContainer,
  SearchContainer,
  ListsRowContainer,
  Search,
  AddItemOrPrintContainer,
  AddItemButton,
  ListKeysRowContainer,
  ProductHeading,
  ProductBrand,
  ProductPrice,
  ProductQuantity,
  ProductTotal,
  ProductStatus,
  ProductDetailsContainer,
  ProductImage,
  StatusButton,
  PopupContainer,
  StatusPopupHeading,
  StatusPopupDescription,
  ConfirmationContainer,
  ConfirmationRowContainer,
  StatusPopupBtnContainer,
  FiCheckIcon,
  MdCloseIcon,
} from './StyledComponents'

class Recco extends Component {
  state = {productsList: []}

  componentDidMount() {
    fetchData().then(response => {
      this.setState({productsList: response.data})
    })
  }

  onClickApproved = id => {
    const {productsList} = this.state
    const updatedProductsList = productsList.map(eachProduct => {
      if (eachProduct.id === id) {
        return {...eachProduct, status: 'Approved'}
      }
      return eachProduct
    })
    this.setState({productsList: updatedProductsList})
  }

  //   missingCall = id => {
  //     this.setState(
  //       prevState => {
  //         const updatedProductsList = prevState.productsList.map(eachProduct => {
  //           if (eachProduct.id === id) {
  //             return {...eachProduct, status: 'Missing'}
  //           }
  //           return eachProduct
  //         })
  //         return {productsList: updatedProductsList}
  //       },
  //       () => {
  //         const {productsList} = this.state
  //         const updatedProduct = productsList.find(
  //           eachProduct => eachProduct.id === id,
  //         )
  //         console.log(getStatusColor(updatedProduct.status))
  //       },
  //     )
  //   }

  missingCall = id => {
    const {productsList} = this.state
    const updatedProductsList = productsList.map(eachProduct => {
      if (eachProduct.id === id) {
        return {...eachProduct, status: 'Missing'}
      }
      return eachProduct
    })
    this.setState({productsList: updatedProductsList})
  }

  missingUrgentCall = id => {
    const {productsList} = this.state
    const updatedProductsList = productsList.map(eachProduct => {
      if (eachProduct.id === id) {
        return {...eachProduct, status: 'Missing - Urgent'}
      }
      return eachProduct
    })
    this.setState({productsList: updatedProductsList})
  }

  render() {
    const {productsList} = this.state

    return (
      <ReccoContainer>
        <Navbar />
        <CheckOutTotal />

        <ListsContainer>
          <ListsRowContainer>
            <SearchContainer>
              <Search type="search" placeholder="Search..." />
              <MdSearch />
            </SearchContainer>
            <AddItemOrPrintContainer>
              <AddItemButton>Add Item</AddItemButton>
              <FiPrinter />
            </AddItemOrPrintContainer>
          </ListsRowContainer>

          <ListKeysRowContainer>
            <ProductHeading>Product Name</ProductHeading>
            <ProductBrand>Brand</ProductBrand>
            <ProductPrice>Price</ProductPrice>
            <ProductQuantity>Quantity</ProductQuantity>
            <ProductTotal>Total</ProductTotal>
            <ProductStatus outline>Status</ProductStatus>
          </ListKeysRowContainer>

          {productsList.map(eachProduct => (
            <ProductDetailsContainer key={eachProduct.id}>
              <ProductImage src={Apple} alt="Apple" />
              <ProductHeading outline>{eachProduct.name}</ProductHeading>
              <ProductBrand>{eachProduct.brand}</ProductBrand>
              <ProductPrice>{eachProduct.price}</ProductPrice>
              <ProductQuantity>{eachProduct.quantity}</ProductQuantity>
              <ProductTotal>{eachProduct.total}</ProductTotal>
              <ProductStatus key={eachProduct.id} status={eachProduct.status}>
                {eachProduct.status}
              </ProductStatus>
              <StatusButton
                outline
                type="button"
                onClick={() => this.onClickApproved(eachProduct.id)}
              >
                <FiCheckIcon status={eachProduct.status}>
                  <FiCheck />
                </FiCheckIcon>
              </StatusButton>
              <PopupContainer>
                <Popup
                  modal
                  trigger={
                    <StatusButton type="button" status={eachProduct.status}>
                      <MdCloseIcon status={eachProduct.status}>
                        <MdClose />
                      </MdCloseIcon>
                    </StatusButton>
                  }
                  position="bottom-center"
                >
                  {close => (
                    <ConfirmationContainer>
                      <ConfirmationRowContainer>
                        <StatusPopupHeading>Missing Product</StatusPopupHeading>
                        <StatusButton type="button" onClick={() => close()}>
                          <MdClose />
                        </StatusButton>
                      </ConfirmationRowContainer>
                      <StatusPopupDescription>
                        Is Chicken Breast Fillets...Urgent?
                      </StatusPopupDescription>
                      <StatusPopupBtnContainer>
                        <StatusButton
                          type="button"
                          onClick={() => this.missingCall(eachProduct.id)}
                        >
                          NO
                        </StatusButton>
                        <StatusButton
                          type="button"
                          onClick={() => this.missingUrgentCall(eachProduct.id)}
                        >
                          YES
                        </StatusButton>
                      </StatusPopupBtnContainer>
                    </ConfirmationContainer>
                  )}
                </Popup>
              </PopupContainer>

              <StatusButton type="button" outline>
                Edit
              </StatusButton>
            </ProductDetailsContainer>
          ))}
        </ListsContainer>
      </ReccoContainer>
    )
  }
}

export default Recco
