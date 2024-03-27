import { useState } from "react";
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  let [selectedTopic, setSelectedTopic] = useState();

  let tabContent = "Please, select a topic.";

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Explore</h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "optionsContracts"}
              onSelect={() => handleSelect("optionsContracts")}
            >
              Options Contracts
            </TabButton>
            {/* arrow function is used to prevent handleSelect to run upon render */}
            <TabButton
              isSelected={selectedTopic === "decentralizedTrading"}
              onSelect={() => handleSelect("decentralizedTrading")}
            >
              DEX Trading
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "liquidityPools"}
              onSelect={() => handleSelect("liquidityPools")}
            >
              Liquidity Pools
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "smartContracts"}
              onSelect={() => handleSelect("smartContracts")}
            >
              Smart Contracts
            </TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </>
  );
}

export default App;
