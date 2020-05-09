import theme from 'styled-theming'
import styled from 'styled-components'

const backgroundColor = theme('theme', {
    light: "#fff",
    dark: "#2d2d2d",
});
  
const textColor = theme('theme', {
    light: "#000",
    dark: "#fff",
});


const buttonColor = theme('theme', {
    light: "#2d2d2d",
    dark: "#fff",
})

const buttonTextColor = theme('theme', {
    light: "#fff",
    dark: "#000",
})

const boxColor = theme('theme', {
    light: "#eee",
    dark: "#242128",
})



export const Container = styled.div`
    
    background-color: ${backgroundColor};
    color: ${textColor};
    
    button {
        background-color: ${buttonColor};
        color: ${buttonTextColor};
    }
    
    p, a, strong, .title, .navbar-link, h1, h2, h3, h4, h5, small {
        color: ${textColor};
    }   
    
    .box, .card, .navbar, .navbar-menu, .navbar-dropdown, navbar-item {
        background-color: ${boxColor};
    }
    
    .custom-black {
        color: #000;
    }
    
    .navbarTarget {
        background-color: ${backgroundColor};
        color: ${textColor};
    }
    
`