import TabButton from "./TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "../data.js";

export default function Examples() {
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
  );
}
