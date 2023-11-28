import {
  FaAsterisk,
  FaFutbol,
  FaGifts,
  FaMugHot,
  FaRepublican,
  FaSeedling,
  FaScrewdriver,
  FaSnowboarding,
} from 'react-icons/fa'

import {
  CheckoutContainer,
  CheckoutDetailsContainer,
  CheckoutHeading,
  CheckoutDescription,
  CategoryContainer,
} from './StyledComponents'

const CheckOutTotal = () => (
  <CheckoutContainer>
    <CheckoutDetailsContainer>
      <CheckoutHeading>Supplier</CheckoutHeading>
      <CheckoutDescription>
        East Coast fruits <br /> & Vegetables
      </CheckoutDescription>
    </CheckoutDetailsContainer>
    <CheckoutDetailsContainer>
      <CheckoutHeading>Shipping date</CheckoutHeading>
      <CheckoutDescription>Thu, Feb 10</CheckoutDescription>
    </CheckoutDetailsContainer>
    <CheckoutDetailsContainer>
      <CheckoutHeading>Total</CheckoutHeading>
      <CheckoutDescription>$ 15,028.3</CheckoutDescription>
    </CheckoutDetailsContainer>

    <CheckoutDetailsContainer>
      <CheckoutHeading>Category</CheckoutHeading>
      <CategoryContainer>
        <FaAsterisk /> <FaFutbol /> <FaGifts /> <FaMugHot />
      </CategoryContainer>
      <CategoryContainer>
        <FaRepublican /> <FaSeedling /> <FaScrewdriver /> <FaSnowboarding />
      </CategoryContainer>
    </CheckoutDetailsContainer>

    <CheckoutDetailsContainer>
      <CheckoutHeading>Department</CheckoutHeading>
      <CheckoutDescription>300-444-678</CheckoutDescription>
    </CheckoutDetailsContainer>

    <CheckoutDetailsContainer outline>
      <CheckoutHeading>Status</CheckoutHeading>
      <CheckoutDescription>
        Awaiting your <br /> Approval
      </CheckoutDescription>
    </CheckoutDetailsContainer>
  </CheckoutContainer>
)

export default CheckOutTotal
