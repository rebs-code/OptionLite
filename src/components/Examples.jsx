import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";
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
    <Section id="examples" title="Explore">
      <Tabs
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "optionsContracts"}
              onClick={() => handleSelect("optionsContracts")}
            >
              Options Contracts
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "decentralizedTrading"}
              onClick={() => handleSelect("decentralizedTrading")}
            >
              DEX Trading
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "liquidityPools"}
              onClick={() => handleSelect("liquidityPools")}
            >
              Liquidity Pools
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "smartContracts"}
              onClick={() => handleSelect("smartContracts")}
            >
              Smart Contracts
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}
