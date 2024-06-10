

"use client";
import { useState } from 'react';
import { Example, EXAMPLES, ExamplesType } from "./data-with-example";
import TabButton from "./TabButton";



function Header() {
const description = ['Gaming '];

return (
<header>
<h1> PLAYTONIA GAMING</h1>
<p>{description} is the ultimate stress reliever. "WELCOME TO PLAYTONIA GAMING"</p>
</header>
);
}

interface CoreConceptProps {
title: string;
description: string;
}

function CoreConcept({ title, description }: CoreConceptProps) {
return (
<li>
<h3>{title}</h3>
<p>{description}</p>
</li>
);
}

function App() {
const [selectedTopic, setSelectedTopic] = useState<keyof ExamplesType>('VFX');

function handleSelect(selectedButton: keyof ExamplesType) {
if (EXAMPLES[selectedButton]) {
setSelectedTopic(selectedButton);
} else {
console.error(`Invalid topic selected: {selectedButton}`);
}
}

console.log('APP COMPONENT EXECUTING');

const selectedExample: Example = EXAMPLES[selectedTopic];

return (
<div>
<Header />
<main>
<section id="core-concepts">
<h2>Core Concepts</h2>
<ul>
<CoreConcept title="VFX" description="The power of VFX in gaming lies in its ability to make the impossible seem real. It's about creating a believable experience that blurs the line between reality and fantasy." />
<CoreConcept title="VR" description="Virtual reality is about giving people the experience of being in a different place and time. It's about making the impossible, possible." />
<CoreConcept title="ESports" description="eSports is a rapidly growing phenomenon that has transformed video gaming into a competitive spectator sport. eSports isn’t the next big thing. It’s the current big thing." />
<CoreConcept title="Bowling" description= "From realistic physics to stunning graphics, bowling games today offer an immersive experience that feels just like being at the lanes.It's all about mastering the angles and perfecting the spin!" />
</ul>
</section>
<section id="examples">
<h2>Examples</h2>
<menu>
 <TabButton
 isSelected={selectedTopic === 'VFX'}
 onSelect={() => handleSelect('VFX')}
 >
   VFX
 </TabButton>
<TabButton
 isSelected={selectedTopic === 'VR'}
 onSelect={() => handleSelect('VR')}
>
VR
 </TabButton>
 <TabButton
 isSelected={selectedTopic === 'ESports'}
 onSelect={() => handleSelect('ESports')}
 >
ESports
 </TabButton>
 <TabButton
 isSelected={selectedTopic === 'Bowling'}
 onSelect={() => handleSelect('Bowling')}
 >
Bowling
  </TabButton>
</menu>

<div id="tab-content">
{selectedExample ? (
<>
<h3>{selectedExample.title}</h3>
<p>{selectedExample.description}</p>
<pre>
<code>{selectedExample.code}</code>
</pre>
</>
) : (
<p>Please select a topic.</p>
)}
</div>
</section>
</main>
</div>
);
}

export default App;

