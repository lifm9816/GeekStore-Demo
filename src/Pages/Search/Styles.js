import styled from "styled-components";

export const ResultsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 2%;
    margin-top: 20px;

    @media (min-width: 931px)
    {
        padding: 0 25%;
    }
`

export const FadeDiv = styled.div`
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;

    &.fade-enter {
        opacity: 0;
        transform: translateY(20px);
    }

    &.fade-enter-active {
        opacity: 1;
        transform: translateY(0px);
    }
`;