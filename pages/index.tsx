import type {NextPage} from "next"
import styled from "styled-components"

const HomeContainer = styled.div`
  background-color: red;
  color: ${props => props.theme.colors.textDisabled};
`

const Home: NextPage = () => {
  return (
    <HomeContainer>
      Home
    </HomeContainer>   
  )
}

export default Home
