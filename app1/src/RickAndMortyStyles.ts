import styled from 'styled-components'
import './index.css'

export const RickAndMortyContainer = styled.section`
    position: relative;
    > div {
        box-sizing: border-box;
        height: 40px;
        position: sticky;
        top: 48px;
        width: 100%;
        background-color: var(--background-primary);
        padding: 5px 0px;
        h1 {
            color: var(--text-primary);
            margin: 0;
            text-align: center;
        }    
    }
    
`
