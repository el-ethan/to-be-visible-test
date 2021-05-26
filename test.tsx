import React from 'react'
import { render } from '@testing-library/react'
import styled from 'styled-components'
import '@testing-library/jest-dom/extend-expect'

const BasicHiddenDiv = styled.div`visibility: hidden`
const OuterDivThatDoesntStyleInnerDiv = styled.div`
    color: red;
`
const OuterDivThatStylesInnerDiv = styled.div`
    #bar {
        color: red;
    }
`

describe('toBeVisible', () => {
    it('works with basic example', () => {
        const {getByTestId} = render(<BasicHiddenDiv data-testid='foo'/>)
        expect(getByTestId('foo')).not.toBeVisible()
    });

    it('works with outer div without styles', () => {
        const {getByTestId} = render(
            <OuterDivThatDoesntStyleInnerDiv>
                <BasicHiddenDiv data-testid='foo' id='bar'/>
            </OuterDivThatDoesntStyleInnerDiv>
        )
        expect(getByTestId('foo')).not.toBeVisible()
    });

    it('works with outer div with styles', () => {
        const {getByTestId} = render(
            <OuterDivThatStylesInnerDiv>
                <BasicHiddenDiv data-testid='foo' id='bar'/>
            </OuterDivThatStylesInnerDiv>
        )
        expect(getByTestId('foo')).not.toBeVisible()
    });
});