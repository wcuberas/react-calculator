import React from 'react'
import { Container, Current, Previous, Screen } from './Styled-components'

const Calculator = () => {
    return (
        <Container>
            <Screen>
                <Previous>10 +</Previous>
                <Current>200</Current>
            </Screen>
        </Container>
    )
}

export default Calculator
