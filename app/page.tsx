

import componentsImg from './src/assets/components.png';
import propsImg from './src/assets/config.png';
import jsxImg from "./src/assets/jsx-ui.png";
import stateImg from "./src/assets/state-mgmt.png";
import TabButton from './TabButton';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function genRandomInt(max: number): number {
return Math.floor(Math.random() * (max + 1));
}

function Header() {
const description = reactDescriptions[genRandomInt(2)];

return (
<header>

<h1>React Essentials</h1>
<p>
{description} React concepts you will need for almost any app you are
going to build!
</p>
</header> );
}

function CoreConcept(props) {
return (
<li>
<img src={props.image} alt={props.title} />
<h3>{props.title}</h3>
<p>{props.description}</p>
</li>
);
}

function App() {
return (
<div>
<Header />
<main>
<section id="core-concepts">
<h2>Core Concepts</h2>
<ul>
<CoreConcept
title="Components"
description="The core UI building block- compose the user interface by combining multiple components."
image={componentsImg}
/>
<CoreConcept 
title="Props" 
description="Make components configurable (and therefore reusable) by passing input data to them."
image={propsImg}
/>

<CoreConcept 
title="JSX"
description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered."
image={jsxImg}/>

<CoreConcept title="stateImg"
description=" React-managed data which, when changed, causes the component to re-render & the UI to update."
image={stateImg}
/>

</ul>
</section>

<section id="examples">
 <h2>Examples</h2>
 <menu>
 <TabButton>Components</TabButton>
 <TabButton>JSX</TabButton>
 <TabButton>Props</TabButton>
 <TabButton>State</TabButton>
</menu>

</section>
</main>
</div>
);
}




export default App;

			