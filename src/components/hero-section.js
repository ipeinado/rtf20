import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"

import BackgroundImage from "gatsby-background-image"

const HeroContent = styled.div`
	padding: 5rem 0;	

	@media screen and (min-width: 992px) {
		margin: 0 auto;
		width: 950px;
	}

	@media screen and (min-width: 1200px) {
		width: 1170px;
	}
`

const HeroTitle = styled.h1`
	font-size: 4.8rem;
	letter-spacing: -2px;
	text-shadow: 1px 1px 5px rgba(0, 0, 0, .3), -1px -1px 5px rgba(0, 0, 0, .3);
	text-transform: uppercase;
	color: #fff;

	@media screen and (min-width: 1200px) {
		width: 70%;
	}
`

const HeroDescription = styled.p`
	font-size: 1.4rem;
	color: #fff;
	font-weight: 500;
`

const HeroSection = ({ className }) => (
	<StaticQuery
		query={graphql`
			query {
				hero: file(relativePath: { eq: "hero-background.jpg" }) {
					childImageSharp {
						fluid(quality: 90, maxWidth: 3200) {
							...GatsbyImageSharpFluid_withWebp
						}
					}
				}
			}
		`}
		render={data => {
			const imageData = data.hero.childImageSharp.fluid
			return (
				<BackgroundImage
					Tag="section"
					className={className}
					fluid={imageData}
					backgroundColor={`#040e18`}
					style={{
						backgroundPosition: `center 30%`,
					}}
				>	
					<HeroContent>
						<HeroTitle>Breaking down the barriers</HeroTitle>
						<HeroDescription>We work to make sure that everyone can use the technologies they encounter.</HeroDescription>
					</HeroContent>
				</BackgroundImage>
			)
		}}
	/>
)

export default HeroSection