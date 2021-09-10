import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-content: center;
    width: 400px;
    margin: 40px auto;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: minmax(120px, auto) repeat(5, 100px);
    box-shadow: 2px 2px 10px #333;
    border-radius: 10px;
`

export const Screen = styled.div`
    grid-column: 1 / -1;
    background-color: rgb(247, 246, 242, 0.9);
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    padding: 10px;
    word-wrap: break-word;
    word-break: break-all;
    text-align: right;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    
`

export const Previous = styled.div`
    color: rgb(240, 55, 165, 0.8);
    font-size: 1.5rem;
`

export const Current = styled.div`
    color: rgb(240, 55, 165);
    font-size: 2.5rem;
`

export const Button = styled.button`
    color: rgb(247, 246, 242, 0.95);
    cursor: pointer;
    font-size: 2rem;
    border: 1px outset gray;
    outline: none;
    background-color: rgb(27, 23, 23, 0.55);
    &:hover {
        background-color: rgb(27, 23, 23, 0.9);
    }

    //Funcion para unir botones
    ${ ({gridSpan}) => gridSpan && `grid-column: span ${gridSpan};` } 

    //Funcion para cambiar color botones operaciones
    ${ ({operation}) => operation && `background-color: #610094;` } 

    //Funcion para cambiar color botones control
    ${ ({control}) => control && `background-color: rgb(27, 23, 23, 0.55);` } 

    //Funcion para cambiar color boton equals
    ${ ({equals}) => equals && `border-bottom-right-radius: 10px; background-color: #F7EA00; color: gray;` } 

    //Funcion para cambiar color boton period
    ${ ({period}) => period && `border-bottom-left-radius: 10px; background-color: rgb(27, 23, 23, 0.55);` } 


`