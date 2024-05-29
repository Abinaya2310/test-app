


"use client";
import { useState } from 'react';
import { Example, EXAMPLES, ExamplesType } from './data';
import TabButton from './TabButton';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

const genRandomInt = (max: number): number => Math.floor(Math.random() * (max + 1));

function Header() {
  const description = reactDescriptions[genRandomInt(reactDescriptions.length - 1)];
  
  return (
    <header>
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}

interface CoreConceptProps {
  title: string;
  description: string;
}

const CoreConcept: React.FC<CoreConceptProps> = ({ title, description }) => (
  <li>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
);

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<keyof ExamplesType>('components');

  const handleSelect = (selectedButton: keyof ExamplesType) => {
    if (EXAMPLES[selectedButton]) {
      setSelectedTopic(selectedButton);
    } else {
      console.error(`Invalid topic selected: ${selectedButton}`);
    }
  };

  const selectedExample: Example = EXAMPLES[selectedTopic];

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept title="Components" description="The core UI building block - compose the user interface by combining multiple components." />
            <CoreConcept title="Props" description="Make components configurable (and therefore reusable) by passing input data to them." />
            <CoreConcept title="JSX" description="Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered." />
            <CoreConcept title="State" description="React-managed data which, when changed, causes the component to re-render & the UI to update." />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
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