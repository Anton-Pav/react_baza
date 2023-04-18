import React, {useState} from "react";

type AccordionPropsType = {
    titleValue: string,
    // collapsed: boolean,
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)

    const collapsedHandler = () => {setCollapsed(!collapsed)}

    return <div>
        <AccordionTitle title={props.titleValue} collapsedHandler={collapsedHandler}/>
        {/*<button onClick={collapsedHandler}>TOGGLE</button>*/}
        {!collapsed && <AccordionBody/>}
    </div>
}

type AccordionTitleType = {
    title: string
    collapsedHandler: () => void
}

function AccordionTitle(props: AccordionTitleType) {
    return (
        <h3 onClick={props.collapsedHandler}>-- {props.title} --</h3>
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

