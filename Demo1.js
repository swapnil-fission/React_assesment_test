import React, { Component } from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


import 'react-accessible-accordion/dist/fancy-example.css';


export class Demo1 extends Component {
    render() {
         var news=[
            {header:"news1",content:"Eoin Morgan also urged the game's administrators to have a roadmap "},
            {header:"news2",content:"rged the game's administrators to have a roadmap for th"},
            {header:"news3",content:"roadmap for the next 10 years to ensure that top players are not forced to choose a private league career over international cr"}
            ];
        return (
            <div>
            
                <Accordion>
                {news.map((news)=>(
                     <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                {news.header}
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p>
                                {news.content}
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                    ))}
                </Accordion>
                
            </div>
        )
    }
}

export default Demo1
