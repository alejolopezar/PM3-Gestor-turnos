import styled, { css } from "styled-components"

const green = "#7be42a"

const commonStyles = css`
color: ${green}
`
const setTransition = (time) =>`all ${time} ease-out`

const Container = styled.div`
background-color: darkviolet;
display: flex;
width: 100%;
height: 100%;
align-items: center;

.h2-title {
    ${commonStyles}
    margin-left: 20px;
    font-size: xx-large;
}
`
const ButtonsContainer = styled.div`
display: flex;
width: 80%;
justify-content: flex-end;
align-items: center;
height: 100%;

button {
    margin: 10px;
    height: 30px;
    border-radius: 10px;
    font-size: 20px;
    cursor: pointer;
    transition: ${setTransition("0.7s")};

    &:hover {
        background-color: black;
        color: white;
    }
}
`
export { Container, ButtonsContainer }