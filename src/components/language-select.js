import React, { useState } from "react"
import styled from "styled-components"

const GoogleTranslateContainer = styled.div`
	position: absolute;
	top: 0;
	z-index: 10;
	width: 100%;
`

const GoogleTranslate = styled.div`
	text-align: center;
	background-color: #fff;
	padding: 1rem;
	width: 100%;
	overflow: hidden;
	border-bottom: 1px solid #ccc;
`

const GoogleTranslateButton = styled.button`
	background-color: #fff;
	font-weight: bold;
	padding: .25rem .5rem;
	font-size: 1.1rem;
	font-family: 'OpenSans',"Myriad Pro",Helvetica,Arial,sans-serif;
	width: 100%;

	@media screen and (min-width: 40em) {
		box-shadow: 2px 2px 3px 0 #6f6f6f;
		border-bottom-left-radius: 5px;
		border-bottom-right-radius: 5px;
		position: absolute;
		right: 13em;
		width: auto;
	}

	&[aria-expanded="false"]:before {
		content: "+";
		margin-right: .3em;
	}

	&[aria-expanded="true"]:before {
		content: "-";
		margin-right: .3em;
	}
`

const LanguageSelect = () => {
	const [translate, setTranslate] = useState(false)

	function toggleTranslate(e) {
		const newTranslate = !translate
		setTranslate(newTranslate)
		console.log("clicked")
	}

	return (
		<GoogleTranslateContainer>
			<GoogleTranslate id="google_translate_element2" style={{ display: translate ? "block" : "none" }}/>
			<GoogleTranslateButton
				aria-controls="google_translate_element2"
				aria-label={ translate ? "Close language selection" : "Open language selection" }
				aria-expanded={ translate }
				onClick={ toggleTranslate }
			>
				translate to...
			</GoogleTranslateButton>
		</GoogleTranslateContainer>
	)
}

export default LanguageSelect