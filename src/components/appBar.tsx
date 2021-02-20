import React from "react";
import { Button, Menu, Popover } from "antd";
import { useWallet } from "../utils/wallet";
import { AccountInfo } from "./accountInfo";
import { Link, useHistory, useLocation } from "react-router-dom";

export const AppBar = (props: { left?: JSX.Element; right?: JSX.Element }) => {
  const { connected, wallet } = useWallet();
  const location = useLocation();
  const history = useHistory();

  const TopBar = (
    <div className="App-Bar">
      <div className="App-Bar-left">
        <div className="App-logo" />
        <Menu mode="horizontal" selectedKeys={[location.pathname]}>
          <Menu.Item key="/">
            <Link
              to={{
                pathname: "/",
              }}
            >
              Swap
            </Link>
          </Menu.Item>
          <Menu.Item key="/add">
            <Link
              to={{
                pathname: "/add",
              }}
            >
              Pool
            </Link>
          </Menu.Item>
          <Menu.Item key="/info">
            <Link
              to={{
                pathname: "/info",
              }}
            >
              Charts
            </Link>
          </Menu.Item>
          <Menu.Item key="trade">
            <a
              href={"https://dex.doce.finance"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Trade
              <sup>↗</sup>
            </a>
          </Menu.Item>
          <Menu.Item key="twitter">
            <a
              href={"https://twitter.com/DoceFinance"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
              <sup>↗</sup>
            </a>
          </Menu.Item>
          <Menu.Item key="twitter">
            <a
              href={"https://t.me/docefinance"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram
              <sup>↗</sup>
            </a>
          </Menu.Item>
        </Menu>
        {props.left}
      </div>
      <div className="App-Bar-right">
        <AccountInfo />
        {connected && (
          <Button
            type="text"
            size="large"
            onClick={() => history.push({ pathname: "/pool" })}
          >
            My Pools
          </Button>
        )}
        <div>
          {!connected && (
            <Button
              type="text"
              size="large"
              onClick={connected ? wallet.disconnect : wallet.connect}
              style={{ color: "#ff00a8" }}
            >
              Connect
            </Button>
          )}
          {connected && (
            <Popover
              placement="bottomRight"
              title="Wallet public key"
              trigger="click"
            ></Popover>
          )}
        </div>
        {props.right}
      </div>
    </div>
  );

  return TopBar;
};
