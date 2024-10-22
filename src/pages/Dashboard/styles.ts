import styled from 'styled-components';

interface FormProps {
  hasError: boolean
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;
  display:flex;

  input{
    flex: 1;
    height: 70px;
    padding:0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    border: 2px solid ${({hasError}) => hasError ? '#c53030' : '#fff'};
    color: #3a3a3a;

    &::placeholder{
      color: #a8a8b3;
    }
  }

  button{
    height: 70px;
    width: 210px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: 0.2s background-color;

    &:hover{
      background: #04a361;
    }
  }
`
export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display:block;
    text-decoration: none;
    display:flex;
    align-items:center;
    transition: transform 0.2s;

    & + a {
      margin-top: 20px;
    }

    &:hover{
      transform: translateX(10px)
    }

    img{
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;
      flex:1;

      strong{
        font-size: 20px;
        color: #3d3d4d;
      }

      p{
        font-size: 18px;
        color: #a8a8ba;
        margin-top: 4px;
      }
    }

    svg{
      margin-left: auto;
      color: #cbcbd6;
    }

  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`

