import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";

function App(props: any) {
    return (
        <div className="App">
            <PageTitle title={'This is App Component'}/>
            <PageTitle title={'My friends'}/>
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={4}/>
            <Rating value={5}/>
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
