import React, { useState } from "react";
import "./screens.css";

const PresentationScreen = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  const screens = [
    { content: "Hi, I'm Yewande. This is my screen content" },
    { content: "Hi, I'm Patrick. This is my screen content" },
    { content: "Hi, I'm Demilade. This is my screen content" },
    { content: "Hi, I'm Oyinade. This is my screen content" },
  ];

  return (
    <section className="screens">
      <div className="presentation-gallery">
        <div className="large-screen">
          <p>{screens[activeScreen].content}</p>
        </div>
        <div className="small-screens">
          {screens.map((screen, index) => (
            <div
              key={index}
              className={`small-screen ${
                activeScreen === index ? "selected" : ""
              }`}
              onClick={() => setActiveScreen(index)}
            >
              <p>Screen {index + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PresentationScreen;
