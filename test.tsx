import React from 'react'
import { render } from '@testing-library/react'
import styled from 'styled-components'
import '@testing-library/jest-dom/extend-expect'

const BasicHiddenDiv = styled.div`visibility: hidden`
const OuterDivWithoutStyles = styled.div``
const OuterDivWithStyles = styled.div`
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
            <OuterDivWithoutStyles>
                <BasicHiddenDiv data-testid='foo' id='bar'/>
            </OuterDivWithoutStyles>
        )
        expect(getByTestId('foo')).not.toBeVisible()
    });

    it('works with outer div with styles', () => {
        const {getByTestId} = render(
            <OuterDivWithStyles>
                <BasicHiddenDiv data-testid='foo' id='bar'/>
            </OuterDivWithStyles>
        )
        expect(getByTestId('foo')).not.toBeVisible()
    });


    it('renders snapshot with red and hidden', () => {
        const {container} = render(
            <OuterDivWithStyles>
                <BasicHiddenDiv data-testid='foo' id='bar'/>
            </OuterDivWithStyles>
        )
        expect(container).toMatchSnapshot()
    });
});