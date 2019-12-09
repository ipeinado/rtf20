import React, { useState } from "react"
import styled from "styled-components"

const SeparatedPanel = styled.div`
    width: 100%;
    transition: height 1s ease;
    padding-top: 2em;

    &:[aria-expanded="false"] {
        height: 0;
    }

    @media screen and (min-width: 40em) {
        position: absolute;
        top: 0;
        z-index: 10;
        padding: 0;
    }
`

const SlidingPanel = styled.div`
    min-width: 100%;
    overflow-x: scroll;
    background-color: #bcb5ad;
`

const PrefsButtons = styled.span`
    width: 100%;

    @media screen and (min-width: 40em) {
        position: absolute;
        right: 1rem;
        width: auto;
        height: auto;
        box-shadow: 2px 2px 3px 0 #6f6f6f;
        border-bottom: 1px solid #ccc;
        border-left: 1px solid #ccc;
        border-right: 1px solid #ccc;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: #fff;
        min-height: 2rem;
        display: block;
        float: right;

        #reset {
            padding-left: .8rem;
            padding-right: .8rem;
            border-right: 1px solid #ccc;
        }
    }

    button {
        width: 100%;
        border-bottom: 1px solid #ccc;
        font-family: 'OpenSans',"Myriad Pro",Helvetica,Arial,sans-serif;
        font-size: 1.1rem;
        padding: 0.5rem 0;
        height: 2rem;
        text-transform: lowercase;
        text-align: center;
        background-color: #fff;
        color: #2f2b2a;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: bold;
        
        @media screen and (min-width: 40em) {
            width: auto;
            margin: 0 .5rem;
            border: none;
            min-height: 1.8rem;
            padding: 0;
        }
    }

    #show-hide[aria-expanded="false"]:before {
        content: "+";
        margin-right: .3rem;
    }

    #show-hide[aria-expanded="true"]:before {
        content: "-";
        margin-right: .3rem;
    }
`

const Panel = styled.li`
    border: 1px solid #615e59;
    min-width: calc(100vw - 2px);
    background-color: #fff;
    white-space: normal;
    display: table-cell;
    padding: 16px .5rem;

    @media screen and (min-width: 40em) {
        padding: 1.5rem;
        padding-top: 1rem;
        border-radius: 5px;
        box-shadow: 2px 2px #7a766d;
        min-width: 25rem;
    }

    h2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        border-bottom: solid #ccc 1px;
        box-shadow: 0 6px 7px -6px rgba(0,0,0,0.3);
        font-size: 1.1rem;
        min-height: 3.6rem;
        text-transform: lowercase;
        white-space: nowrap;
        pointer-events: none;

        @media screen and (min-width: 40em) {
            justify-content: flex-start;
            margin: 0 0 1.8rem 0;
            font-size: 1.2rem;
            height: 3rem;
            white-space: normal;
        }
    }
`

const TextFieldStepperButton = styled.button`
    border: 2px solid #000;
    border-radius: .4rem;
    background-color: #fff;
    height: 2.4375em;
    width: 2.4375em;
`

const ContrastChoice = styled.div`
    input[type="radio"] {
        position: relative;
        z-index: -2;
        top: 1rem;
        left: 1rem;
    }

    .fl-indicator {
        margin-top: -1.5em;
        height: 1em;
        width: calc(100% - 5px);
        text-align: center;
        font-size: 1.25em;
    }

    input[type="radio"]:checked + .fl-indicator {
        position: relative;
        &:before {
            content: '';
            position: absolute;
            top: 8px;
            left: 11px;
            border-top: 12px solid #585757;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
        }

        &:after {
            content: '';
            position: absolute;
            left: 7px;
            top: 0;
            border-top: 0px solid #ffffff;
            border-left: 0px solid transparent;
            border-right: 0px solid transparent;
        }
    }

    label {
        margin-right: 5px;
        position: relative;
        border: 1px solid #000;
        border-radius: 5px;
        height: 2.5em;
        width: 2.5em;
        text-align: center;
        vertical-align: middle;
        display: inline-block;
        line-height: 2.2em !important;
        padding: 2px;
    }
    .fl-preview-A {
        font-size: 1.7rem;
    }
    .fl-hidden-accessible {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
    }

    .fl-crossout {
        position: absolute;
        width: 110%;
        border-top: 3px dotted #433f3d;
        transform:
            translateX(-30px)
            translateY(18px) 
            rotate(45deg);
    }
`

const Switch = styled.span`
    width: 5.4em;
    border: .15em solid currentColor;
    border-radius: 2em;
    margin: 0 1em;
    display: flex;
    align-items: center;
    background-color: #fff;

    .controlKnob {
        height: 1.8em;
        width: 1.8em;
        background-color: currentColor;
        border-radius: 1.8em;
        display: inline-block;
        margin: .2em;
    }

    &[aria-checked="true"] {
        justify-content: flex-end;
    }
`

export default function UIOptions() {
    const [isExpanded, setIsExpanded] = useState(false)
    const [textSize, setTextSize] = useState(1)
    const [textFont, setTextFont] = useState("")
    const [lineSpacing, setLineSpacing] = useState(1)
    const [contrast, setContrast] = useState("default")
    const [toc, setToc] = useState(false)
    const [enhanceInputs, setEnhanceInputs] = useState(false)

    function toggleExpand(e) {
        const newExpanded = !isExpanded
        setIsExpanded(newExpanded)
    }

    function decreaseTextSize(e) {
        const newTextSize = textSize - 0.1
        if (newTextSize > 0.5) {
            setTextSize(newTextSize)    
        }
    }

    function increaseTextSize(e) {
        const newTextSize = textSize + 0.1
        if (newTextSize < 2.1) {
            setTextSize(newTextSize)
        }
    }

    function textFontChange(e) {
        setTextFont(e.target.value)
    }

    function decreaseLineSpacing(e) {
        const newLineSpacing = lineSpacing - 0.1
        if (newLineSpacing > 0.7) {
            setLineSpacing(newLineSpacing)    
        }
    }

    function increaseLineSpacing(e) {
        const newLineSpacing = lineSpacing + 0.1
        if (newLineSpacing < 2.1) {
            setLineSpacing(newLineSpacing)
        }
    }

    function contrastChange(e) {
        const value = e.target.value,
              inputChosen = document.getElementById(value)
        setContrast(value)
    }

    function tocClick(e) {
        const newToc = !toc
        setToc(newToc)
    }

    function enhanceInputsClick(e) {
        const newEnhanceInputs = !enhanceInputs
        setEnhanceInputs(newEnhanceInputs)
    }

    function handleReset(e) {
        console.log("Reset clicked")
    }

	return (
        <SeparatedPanel>
            <SlidingPanel id="prefs-panel" style={{ height: isExpanded ? `auto` : `0px` }}>
                <ul style={{ margin: `1rem 0`, display: `table`, borderSpacing: `20px 0`, }}>
                    <Panel>
                        <h2>Font size</h2>
                        <p>Adjust font size</p>
                        <div id="textFieldStepper" style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}>
                            <span style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}>
                                <TextFieldStepperButton 
                                    onClick={ decreaseTextSize }
                                    aria-label="Decrease text size"
                                >
                                    -
                                </TextFieldStepperButton>
                                <input 
                                    readOnly
                                    style={{
                                        margin: `0 .5em`,
                                        width: `4em`,
                                        height: `2em`,
                                        textAlign: `center`
                                    }}
                                    type="text"
                                    value={ textSize } 
                                    aria-valuemin="1"
                                    aria-valuemax="2"
                                    aria-valuenow={ textSize } 
                                    role="spinbutton"/>
                                <TextFieldStepperButton
                                    onClick={ increaseTextSize }
                                    aria-label="Increase text size"
                                >
                                    +
                                </TextFieldStepperButton>
                            </span>
                        </div>
                    </Panel>
                    <Panel>
                        <h2>Text style</h2>
                        <p>Change the font used</p>
                        <select
                            style={{
                                margin: `0 auto`,
                                display: `block`,
                                fontWeight: `bold`
                            }}
                            defaultValue={ textFont }
                            onChange={ textFontChange }
                        >
                            <option value="">Default</option>
                            <option value="tnr">Times New Roman</option>
                            <option value="cs">Comic Sans</option>
                            <option value="arial">Arial</option>
                            <option value="verdana">Verdana</option>
                        </select>
                    </Panel>
                    <Panel>
                        <h2>Line spacing</h2>
                        <p>Adjust the spacing between lines of text</p>
                        <div id="lineSpacingStepper" style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}>
                            <span style={{ display: `flex`, justifyContent: `center`, alignItems: `center` }}>
                                <TextFieldStepperButton 
                                    onClick={ decreaseLineSpacing }
                                    aria-label="decrease line spacing"
                                >
                                    -
                                </TextFieldStepperButton>
                                <input 
                                    readOnly
                                    style={{
                                        margin: `0 .7em`,
                                        width: `4em`,
                                        height: `2em`,
                                        textAlign: `center`
                                    }}
                                    type="text"
                                    value={ lineSpacing } 
                                    aria-valuemin="1"
                                    aria-valuemax="2"
                                    aria-valuenow={ lineSpacing } 
                                    role="spinbutton"/>
                                <TextFieldStepperButton
                                    onClick={ increaseLineSpacing }
                                    aria-label="increase line spacing"
                                >
                                    +
                                </TextFieldStepperButton>
                            </span>
                        </div>
                    </Panel>
                    <Panel>
                        <h2>Contrast</h2>
                        <fieldset style={{ border: 0, margin: 0, padding: 0, }}>
                            <legend style={{ marginBottom: `1rem`, }}>Change text and background colors</legend>
                            <div style={{ display: `flex`, justifyContent: `center`, }}>
                                <ContrastChoice>
                                    <input 
                                        id="default"
                                        className="fl-hidden-accessible"
                                        type="radio" name="contrast"
                                        value="default"
                                        onChange={ contrastChange }
                                        checked={ contrast === "default" }
                                    />
                                    <div className="fl-indicator" />
                                    <label 
                                        htmlFor="default"
                                        aria-label="Default"
                                        style={{
                                            backgroundColor: `#fff`,
                                            bordeColor: `#433f3d`,
                                            color: `#433f3d`,
                                        }}
                                    >
                                        <span className="fl-preview-A" aria-hidden="true">a</span>
                                        <span className="fl-hidden-accessible">Default</span>
                                        <span className="fl-crossout" aria-hidden="true"></span>
                                    </label>
                                </ContrastChoice>
                                <ContrastChoice>
                                    <input
                                        id="bw"
                                        className="fl-hidden-accessible"
                                        type="radio"
                                        name="contrast"
                                        value="bw"
                                        onChange={ contrastChange }
                                        checked={ contrast === "bw" }
                                    />
                                    <div className="fl-indicator" />
                                    <label 
                                        htmlFor="bw"
                                        aria-label="Black on white"
                                        style={{
                                            backgroundColor: `#fff`,
                                            bordeColor: `#000`,
                                            color: `#000`,
                                        }}
                                    >
                                        <span className="fl-preview-A" aria-hidden="true">a</span>
                                        <span className="fl-hidden-accessible">Black on white</span>
                                    </label>
                                </ContrastChoice>
                                <ContrastChoice>
                                    <input
                                        id="wb"
                                        className="fl-hidden-accessible"
                                        type="radio"
                                        name="contrast"
                                        value="wb"
                                        onChange={ contrastChange }
                                        checked={ contrast === "wb" }
                                    />
                                    <div className="fl-indicator" />
                                    <label 
                                        htmlFor="wb"
                                        aria-label="White on Black"
                                        style={{
                                            backgroundColor: `#000`,
                                            bordeColor: `#fff`,
                                            color: `#fff`,
                                        }}
                                    >
                                        <span className="fl-preview-A" aria-hidden="true">a</span>
                                        <span className="fl-hidden-accessible">White on Black</span>
                                    </label>
                                </ContrastChoice>
                                <ContrastChoice>
                                    <input
                                        id="by"
                                        className="fl-hidden-accessible"
                                        type="radio"
                                        name="contrast"
                                        value="by"
                                        onChange={ contrastChange }
                                        checked={ contrast === "by" }
                                    />
                                    <div className="fl-indicator" />
                                    <label 
                                        htmlFor="by"
                                        aria-label="Black on Yellow"
                                        style={{
                                            backgroundColor: `#ff0`,
                                            bordeColor: `#000`,
                                            color: `#000`,
                                        }}
                                    >
                                        <span className="fl-preview-A" aria-hidden="true">a</span>
                                        <span className="fl-hidden-accessible">Black on Yellow</span>
                                    </label>
                                </ContrastChoice>
                                <ContrastChoice>
                                    <input
                                        id="yb"
                                        className="fl-hidden-accessible"
                                        type="radio"
                                        name="contrast"
                                        value="yb"
                                        onChange={ contrastChange }
                                        checked={ contrast === "yb" }
                                    />
                                    <div className="fl-indicator" />
                                    <label 
                                        htmlFor="yb"
                                        aria-label="Yellow on Black"
                                        style={{
                                            backgroundColor: `#000`,
                                            bordeColor: `#ff0`,
                                            color: `#ff0`,
                                        }}
                                    >
                                        <span className="fl-preview-A" aria-hidden="true">a</span>
                                        <span className="fl-hidden-accessible">Yellow on Black</span>
                                    </label>
                                </ContrastChoice>
                                <ContrastChoice>
                                    <input
                                        id="lgdg"
                                        className="fl-hidden-accessible"
                                        type="radio"
                                        name="contrast"
                                        value="lgdg"
                                        onChange={ contrastChange }
                                        checked={ contrast === "lgdg" }
                                    />
                                    <div className="fl-indicator" />
                                    <label 
                                        htmlFor="lgdg"
                                        aria-label="Light grey on dark grey"
                                        style={{
                                            backgroundColor: `#555`,
                                            bordeColor: `#bdbdbb`,
                                            color: `#bdbdbb`,
                                        }}
                                    >
                                        <span className="fl-preview-A" aria-hidden="true">a</span>
                                        <span className="fl-hidden-accessible">Light grey on dark grey</span>
                                    </label>
                                </ContrastChoice>
                                <ContrastChoice>
                                    <input
                                        id="gw"
                                        type="radio"
                                        name="contrast"
                                        value="gw"
                                        onChange={ contrastChange }
                                        checked={ contrast === "gw" }
                                    />
                                    <div className="fl-indicator" />
                                    <label 
                                        htmlFor="gw"
                                        aria-label="Grey on White"
                                        style={{
                                            backgroundColor: `#fff`,
                                            bordeColor: `#6c6c6c`,
                                            color: `#6c6c6c`,
                                        }}
                                    >
                                        <span className="fl-preview-A" aria-hidden="true">a</span>
                                        <span className="fl-hidden-accessible">Grey on white</span>
                                    </label>
                                </ContrastChoice>
                                <ContrastChoice>
                                    <input
                                        id="gd"
                                        type="radio"
                                        name="contrast"
                                        value="gd" 
                                        onChange={ contrastChange }
                                        checked={ contrast === "gd" }
                                    />
                                    <div className="fl-indicator" />
                                    <label 
                                        htmlFor="gd"
                                        aria-label="Grey on Dark"
                                        style={{
                                            backgroundColor: `#222`,
                                            bordeColor: `#888`,
                                            color: `#888`,
                                        }}
                                    >
                                        <span className="fl-preview-A" aria-hidden="true">a</span>
                                        <span className="fl-hidden-accessible">Grey on dark</span>
                                    </label>
                                </ContrastChoice>
                                <ContrastChoice>
                                    <input
                                        id="bb"
                                        type="radio"
                                        name="contrast"
                                        value="bb"
                                        onChange={ contrastChange }
                                        checked={ contrast === "bb" }
                                    />
                                    <div className="fl-indicator" />
                                    <label 
                                        htmlFor="bb"
                                        aria-label="Black on brown"
                                        style={{
                                            backgroundColor: `#b96`,
                                            bordeColor: `#000`,
                                            color: `#000`,
                                        }}
                                    >
                                        <span className="fl-preview-A" aria-hidden="true">a</span>
                                        <span className="fl-hidden-accessible">Black on brown</span>
                                    </label>
                                </ContrastChoice>
                            </div>
                        </fieldset>
                    </Panel>
                    <Panel>
                        <h2>Table of contents</h2>
                        <p id="toc_descr">Create a table of contents</p>
                        <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, }}>
                            <span>OFF</span>
                            <Switch
                                onClick={ tocClick }
                                aria-labelledby="toc_descr"
                                aria-checked={ toc }
                                role="switch"
                                tabindex="0"
                            >
                                <span className="controlKnob" />
                            </Switch>
                            <span>ON</span>
                        </div>
                    </Panel>
                    <Panel>
                        <h2>Enhance inputs</h2>
                        <p id="enhance_inputs_descr">Emphasize links, buttons, menus, textfields, and other inputs</p>
                        <div style={{ display: `flex`, justifyContent: `center`, alignItems: `center`, }}>
                            <span>OFF</span>
                            <Switch
                                onClick={ enhanceInputsClick }
                                aria-labelledby="enhance_inputs_descr"
                                aria-checked={ enhanceInputs }
                                role="switch"
                                tabindex="0"
                            >
                                <span className="controlKnob" />
                            </Switch>
                            <span>ON</span>
                        </div>
                    </Panel>
                </ul>
            </SlidingPanel>
            <PrefsButtons>
                { isExpanded && <button id="reset" onClick={ handleReset }>reset</button> }
                <button
                    id="show-hide"
                    aria-controls="prefs-panel" 
                    aria-label={ isExpanded ? "Hide display preferences": "Show display preferences"}
                    aria-pressed={ isExpanded }
                    aria-expanded={ isExpanded }
                    onClick={ toggleExpand }
                >
                    { isExpanded ? "Hide preferences" : "Show preferences" }
                </button>
            </PrefsButtons>
        </SeparatedPanel>
    )
}