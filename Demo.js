import React from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';


import 'react-accessible-accordion/dist/fancy-example.css';

export default function Demo() {
    return (
        <Accordion>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        News 1
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Eoin Morgan also urged the game's administrators to have a roadmap for the next 10 years to ensure that top players are not forced to choose a private league career over international cricket.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        News 2
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Quinton de Kock, Kagiso Rabada, Lungi Ngidi, David Miller, and Anrich Nortje will be available only for the first two ODIs against Pakistan before they fly to India ahead of the IPL 2021.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        News 3
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <p>
                        Shreyas Iyer, who had led Delhi Capitals to the IPL final last year in UAE, was replaced by Rishabh Pant as skipper for the upcoming edition starting on April 9.
                    </p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}