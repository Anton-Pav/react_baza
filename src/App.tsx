import React, {useState} from 'react';
import './App.css';
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import {Rating, RatingValue} from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

    const [rating, setRating] = useState<RatingValue>(0)
    const [accordion, setAccordion] = useState<boolean>(false)
    const [on, setOn] = useState(false)



    return (
        <div className="App">
            <UncontrolledOnOff />
            {/*<UncontrolledAccordion titleValue={'Menu'} />*/}
            {/*<UncontrolledAccordion titleValue={'Users'}/>*/}
            {/*<UncontrolledRating/>*/}
            <Rating value={rating} onClick={setRating}/>
            <Accordion titleValue={'menu'} collapsed={accordion} collapsedHandler={ () => setAccordion(!accordion)}/>
            <OnOff on={on} setOn={setOn}/>
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    return (
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

export default App;
