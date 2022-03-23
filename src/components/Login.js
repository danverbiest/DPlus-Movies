import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/logo.svg" />
                <CTAText>
                    The greatest stories,
                    all in one place.
                </CTAText>
                <SignUp>SIGN UP NOW</SignUp>
                <Description>
                    Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription.
                    As of 24/11/2021, the price of Disney+ and The Disney Bundle will increase by £1
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: left;
    justify-content: left;

    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("https://cnbl-cdn.bamgrid.com/assets/a0ef30ee1854c28f693bb81beb84c45e4ae50cd4dfae0c99c380a856c87f3a6c/original");
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.7;
    };
`
const CTA = styled.div`
    max-width: 650px;
    width: 90%;
    padding: 80px 40px;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: left;
`

const CTALogoOne = styled.img`
    width: 40%;
`

const CTALogoTwo = styled.img`
    width: 90%;
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;
    font-family: Roboto;
    font-weight: 900;

    &:hover {
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    font-family: Roboto;
    font-weight: 300;
`

const CTAText = styled.p`
    max-width: 450px;
    font-size: 45px;
    font-family: Roboto;
    font-weight: 900;
    margin-top: 20px;
`