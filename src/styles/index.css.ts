import { fontFace, globalFontFace, globalStyle, style } from "@vanilla-extract/css";

// TODO: Get the font to properly embed instead of relying on the system's font-book
const Jetbrains = fontFace({
    src: "url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500&display=swap')"
})


globalStyle('body', {
    height: "100vh",
    width: "100vw",
    overflow: 'hidden',
    display: 'flex',
    margin: 0,
    padding: 0,
    backgroundColor: '#1a1a1a',
})

// General definitions
export const parentDIV = style({
    flex: 1,
    display: 'flex',
    flexDirection: 'column-reverse'
})

export const header = style({    // The main large text header
    fontSize: '8vw',
    fontFamily: 'JetBrains Mono, monospace',
    color: '#eae7e5',
    padding: '3.5vw',
    margin: 0,
})

export const align = style({    // The main flexbox div definition
    flex: 1, 
    display: 'flex',
    alignItems: 'flex-end',
    boxSizing: 'border-box',
})

export const alignUp = style({    // The main flexbox div definition
    flex: 1, 
    display: 'flex',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    justifyContent: 'right',
})

export const content = style({
    color: '#eae7e5',
    padding: '3.5vw',
    margin: 0, 
    fontFamily: 'Merriweather Sans, monospace',
    fontSize: '2.5vw'
})



