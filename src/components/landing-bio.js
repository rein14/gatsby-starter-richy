import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  text-align: center;
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
 
`
const Mailliink = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color:white;

 
`

const NameHeader = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 0;
  color: #ffffff;
    border-radius: 1em 0 1em 0;
    background-image: linear-gradient( -100deg,rgb(0, 140, 186),rgba(255,250,150,0.8) 100%,rgba(255,250,150,0.25) );
`
const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
            subtitle
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
        <img alt='' style={{'borderRadius':'100px','max-width':'40%'}} src='https://media-exp1.licdn.com/dms/image/C4E03AQHjIYJQTSnnTQ/profile-displayphoto-shrink_200_200/0?e=1586995200&v=beta&t=_DBAshYMVhXilUgGUq0oUtGAmJFggv9AT1XjkevxtgE'></img>

          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description style={{'font-weight':'bold'}}>(Creative introvert/Software Engineer)</Description>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          <Mailliink>Send Me A Mail</Mailliink>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
  subtitle: ``,
}

export default LandingBio
