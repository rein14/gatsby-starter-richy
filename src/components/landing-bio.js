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
  padding-top:2px;
  margin-bottom: 1rem;
  font-size: 1.1rem;
 
`

const MailLink = styled.a`
  color:#2b7289;
  font-weight: bold;
  margin-left: 15px;
  text-decoration: none;
  display: inline-block;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    transform-origin: bottom right;
    transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
  }
  :hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`

const NameHeader = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 0;
  color: #ffffff;
    border-radius: 1em 0 1em 0;
    background-image: linear-gradient( -100deg,rgb(2, 24, 31),rgba(253,254,255,0.8) 100%,rgba(255,250,150,0.25) );`

    
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
<img alt='' style={{'borderRadius':'100%','max-width':'40%', 'max-height':'50%'}} src='https://media-exp1.licdn.com/dms/image/C4E03AQGjn2Z-CZ3Oww/profile-displayphoto-shrink_800_800/0/1658400915878?e=1663804800&v=beta&t=mqoekZbcE65zDW6rnFc7u3FXom2qWyHYhcmprUOh9EQ'></img>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
          <Description style={{'font-weight':'bold'}}>(Creative introvert)</Description>
          <Description>{data.site.siteMetadata.subtitle}</Description>
          {/*<MailLink href="mailto:richmondnyamekye14@gmail.com?Subject=Hello" target="_top">>>Send Me A Mail </MailLink>*/}

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
