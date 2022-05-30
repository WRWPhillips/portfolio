import React from "react";
import styled from "styled-components";

const Iframe = styled.iframe`
  width: 50%;
  margin: 0 25%;
  display: flex;
  content-align: center;
  height: 120vh;
  border: .5rem solid ${props => props.theme.borderColor};
  border-radius: 1rem;
  @media (max-width: 1416px) {
    width: 60%;
    margin 0 20%;
  }
  @media (max-width: 1210px) {
    width: 70%;
    margin: 0 15%;
  }
  @media (max-width: 1060px) {
      width: 80%;
      margin: 0 10%;
  }

`

const Div = styled.div`
  display: flex;
  align-content: center;
`

const Resume = () => {

  return(
        <>
            <Div>
                <Iframe src="https://docs.google.com/document/d/e/2PACX-1vSZFWRkp4S9-kv5P54FHyHWZKP10d7YwGm492vjczFLoTX8WHM8fAfv_tQTfja9RkR7s55PCx_lLJJT/pub?embedded=true"></Iframe>
            </Div>
        </>
  )      
}

export default Resume;