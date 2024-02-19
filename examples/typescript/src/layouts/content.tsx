import React, { Component } from 'react'
import About from "../components/sections/About";
import styled from '@emotion/styled';


const Wrapper = styled.div`
grid-area:main;
`;

const Div = styled.div`
 display:grid;

 grid-template-columns:1fr;
 /* It'll do for now. See what feedback is needed for this. */ 
 grid-template-rows: 1fr 1fr auto 1fr;
`;

export default class Content extends Component {
    render() {
        return (
            <Wrapper>
                <Div>
                    <About/>
                </Div>
            </Wrapper>
        )
    }
}
