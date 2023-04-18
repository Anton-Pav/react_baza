import React from "react";

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean,
    collapsedHandler: () => void
}

function Accordion(props: AccordionPropsType) {

    return <div>
        <AccordionTitle title={props.titleValue} setAccordion={props.collapsedHandler}/>
        {!props.collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitleType = {
    title: string
    setAccordion: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={props.setAccordion}>-- {props.title} --</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

export default Accordion