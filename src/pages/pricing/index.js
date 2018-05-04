import React, {Component} from 'react'
import styled, { css } from 'styled-components'

import { media } from '../../styles/utils'

class Pricing extends Component {

    state = {
		
	}

    render() {
        return (
            <Wrapper>
				<Heading>Pricing</Heading>
            </Wrapper>
        )
    }
}


const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
    min-height: 100vh;
`

const Heading = styled.div`
	font-size: 50px;
`

export default Pricing;
