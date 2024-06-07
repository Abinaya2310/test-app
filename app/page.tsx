

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
const [selectedTopic, setSelectedTopic] = useState<keyof ExamplesType>('components');

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
<CoreConcept title="VFX" description="The core UI building block - compose the user interface by combining multiple components." />
<CoreConcept title="VR" description="Make components configurable (and therefore reusable) by passing input data to them." />
<CoreConcept title="ESports" description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered." />
<CoreConcept title="Bowling" description="React-managed data which, when changed, causes the component to re-render & the UI to update." />
</ul>
</section>
<section id="examples">
<h2>Examples</h2>
<menu>
 <TabButton
 isSelected={selectedTopic === 'components'}
 onSelect={() => handleSelect('components')}
 >
     Components
 </TabButton>
<TabButton
 isSelected={selectedTopic === 'jsx'}
 onSelect={() => handleSelect('jsx')}
>
JSX
 </TabButton>
 <TabButton
 isSelected={selectedTopic === 'props'}
 onSelect={() => handleSelect('props')}
 >
 Props
 </TabButton>
 <TabButton
 isSelected={selectedTopic === 'state'}
 onSelect={() => handleSelect('state')}
 >
 State
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

