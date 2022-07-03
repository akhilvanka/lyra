import * as React from "react";
import MetaMaskAuth from "../components/metamaskauth";
import { Reading } from "../components/reading";
import { align, header, parentDIV, content, alignUp } from "../styles/index.css";

const IndexPage = () => {
  return (
    <body>
      <div className={parentDIV}>
      <div className={align}>
      <h1 className={header}>(Lyra)</h1>
      </div>
      <div className={align}>
        <p className={content}>A new approach to authentication <br></br> & identity management</p>
      </div>
      </div>
      <div className={parentDIV}>
        <Reading/>
        <div className={alignUp}>
        <MetaMaskAuth onAddressChanged={address => {}}/>
        </div>
      </div>
    </body>
  )
};

export default IndexPage;
