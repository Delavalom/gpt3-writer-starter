import Head from "next/head";
import Image from "next/image";
import React, {
  ChangeEvent,
  ReactEventHandler,
  SetStateAction,
  useRef,
  useState,
} from "react";
import buildspaceLogo from "../assets/buildspace-logo.png";

const Home = () => {
  const [userInput, setUserInput] = useState("");

  const onUserChangedText = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Writer | buildspace</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Startup scripts generator</h1>
          </div>
          <br />
          <div className="header-subtitle">
            <h2>Input what ever you need to write to give the form you want to your startup</h2>
          </div>
          <br />
          <div className="prompt-container">
            <textarea
              value={userInput}
              onChange={onUserChangedText}
              placeholder="start typing here"
              className="prompt-box"
            />
            <div className="prompt-buttons">
              <a className="generate-button" onClick={null}>
                <div className="generate">
                  <p>Generate</p>
                </div>
              </a>
            </div> 
          </div>
        </div>
      </div>
      <div className="badge-container grow">
        <a
          href="https://buildspace.so/builds/ai-writer"
          target="_blank"
          rel="noreferrer"
        >
          <div className="badge">
            <Image src={buildspaceLogo} alt="buildspace logo" />
            <p>build with buildspace</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Home;
