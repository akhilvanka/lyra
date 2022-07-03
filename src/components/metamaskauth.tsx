import React, {useEffect, useState} from "react"
import { button, address, divStyle } from "../styles/metamaskauth.css";

function isMobileDevice() {
    return 'ontouchstart' in window || 'onmsgesturechange' in window;
}

async function connect(onConnected) {
    if (!window.ethereum) {
        alert("Get MetaMask");
        return;
    }

    const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
    });

    onConnected(accounts[0]);
}

async function checjIfWalletIsConnected(onConnected) {
    if (window.ethereum) {
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });

        if (accounts.length > 0) {
            const account = accounts[0]
            onConnected(account);
            return;
        }

        if (isMobileDevice()) {
            await connect(onConnected);
        }
    }
}

export default function MetaMaskAuth({ onAddressChanged }) {
    const [userAddress, setUserAddress] = useState("");

    useEffect(() => {
        onAddressChanged(userAddress);
    }, [userAddress]);

    return userAddress ? (
        <div className={divStyle}>
            Connected with <Address userAddress={userAddress} />
        </div>
    ) : (
        <Connect setUserAddress={setUserAddress} />
    );
}

function Connect({ setUserAddress }) {
    if (isMobileDevice()) {
        const dappUrl = "metamask-auth.com"
        const metamaskAppDeepLink = "https://test.com"
        return (
            <a href={metamaskAppDeepLink}>
                <button className={button}>
                    Connect to MetaMask
                </button>
            </a>
        );
    }

    return (
        <button className={button} onClick={() => connect(setUserAddress)}>
            Connect to MetaMask
        </button>
    );
}

function Address({ userAddress }) {
    return (
        <span className={address}>{userAddress.substring(0,5)}...{userAddress.substring(userAddress.length -4)}</span>
    );
}