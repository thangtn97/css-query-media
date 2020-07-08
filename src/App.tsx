import React, { useState, useEffect } from "react";
import TextInput from "./components/TextInput/TextInput";
import Panel from "./components/Panel/Panel";
import QueryItem from "./components/QueryItem/QueryItem";

function App() {
  const [mediaQueries, setMediaQueries] = useState<string[]>([
    "@media (max-width: 400px)",
    "@media (min-width: 400px)",
  ]);
  const [widthPanel, setWidthPanel] = useState(400);

  const addMediaQuery = (query: string) => {
    setMediaQueries([...mediaQueries, query]);
  };

  const handleMouseMove = (width: number) => {
    setWidthPanel(width);
  };

  useEffect(() => {
    handleMouseMove(widthPanel);
  }, []);

  return (
    <div className="App">
      <TextInput handleClicked={addMediaQuery} />
      <p>{widthPanel}</p>
      <Panel handleMouseMove={handleMouseMove}>
        {mediaQueries.map((query, i) => (
          <QueryItem
            key={i}
            query={query}
            width={widthPanel}
            removeQuery={() =>
              setMediaQueries(mediaQueries.filter((item) => item != query))
            }
          />
        ))}
      </Panel>
    </div>
  );
}

export default App;
