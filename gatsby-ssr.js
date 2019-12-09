const React = require("react")
exports.onRenderBody = ({
  setPostBodyComponents
}) => {
  setPostBodyComponents([
  	<script
  		key="1" 
  		type="text/javascript"
  		dangerouslySetInnerHTML={{
  			__html: `function googleTranslateElementInit2() {new google.translate.TranslateElement({pageLanguage: 'en',autoDisplay: false}, 'google_translate_element2');}`
  		}}
  	/>,
  	<script
  		key="2"
  		type="text/javascript"
  		src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit2"
  	/>
  ])
}