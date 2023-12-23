import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const FormContainer = styled.form`
    height: 300px;
    min-width: 500px;
`;

export const PaymentButton = styled(Button)`
    margin-left: auto;
    margin-top: 30px;
`
export const PaymentSuccessfulContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border: 1px solid #65B741;
`

export const PaymentSuccessfulText = styled.h3`
    font-weight: bold;
    color: #65B741;
    display: flex;
    align-items: center;
`
export const PaymentSuccessfulImage = styled.img`
    width: 32px;
    height: 32px;
    margin-right: 10px;
`