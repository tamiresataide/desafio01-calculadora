import styled from 'styled-components'

export const InputContainer = styled.div`
   width: 100%;
   height: 75px;

   display: flex;
   align-items: center;
   justify-content: flex-end;
   border-radius: 15px;   

   input{
      width: 100%;
      height: 75px;
      background-color: #A1A1A1;
      border: 0;
      border-top-right-radius: 15px;
      border-top-left-radius: 15px;
      direction: rtl;

      font-size: 24px;
      font-family: 'Roboto';
      padding: 0 10px
   }
`