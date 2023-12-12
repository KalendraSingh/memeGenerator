// Style your components here
import styed from 'styled-components'

export const DivBg = styed.div`

    background-image:url(${props => props.imageUrl});
    width:50%;
   
    background-size:cover;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center


`
export const ParaEl = styed.p`
    color:black;
    font-size:${props => props.fontSize}px;
    
`
