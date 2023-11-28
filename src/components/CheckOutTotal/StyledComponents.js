import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 13px;
  display: flex;
  border: 1px solid #bfbfbf;
  height: 95px;
  align-items: center;
  margin-left: 60px;
  margin-right: 60px;
  border-radius: 5px;
  font-family: 'Roboto';
  justify-content: space-evenly;
`

export const CheckoutDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 150px;
  padding-left: 10px;
  align-items: flex-start;
  border-right: ${props => (props.outline ? '' : '1px solid #bfbfbf')};
`

export const CheckoutHeading = styled.p`
  font-size: 12px;
  color: #a6a6a6;
  font-weight: 500;
  margin-top: 0px;
`
export const CheckoutDescription = styled.p`
  font-size: 15px;
  font-weight: 500;
  margin: 0px;
  color: #333333;
`
export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  border-radius: 7px;
  max-width: 110px;
  color: #a6a6a6;
  margin-bottom: 4px;
`
