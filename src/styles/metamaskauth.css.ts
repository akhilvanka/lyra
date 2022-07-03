import {style} from '@vanilla-extract/css'

export const button = style({
    color: 'white',
    background: '-webkit-linear-gradient(left, #e5771b, #753d16)',
    backgroundSize: '200% 200%',
    borderRadius: '10px',
    border: 'none',
    padding: '13px',
    cursor: 'pointer',
    fontWeight: 600, 
    fontSize: '0.9em',
    fontFamily: 'JetBrains Mono, monospace',
    width: '15vw',
    height: '5vh',
    margin: '30px',
    ":hover": {
        background: '-webkit-linear-gradient(left, #e5771b, #e5771b)',
    }
})

export const address = style({
    backgroundColor: '#e5771b',
    color: 'white',
    padding: '5px',
    borderRadius: '5px',
    border: 'none',
})

export const divStyle = style({
    color: 'white',
    fontFamily: 'JetBrains Mono, monospace',
    margin: '30px'
})