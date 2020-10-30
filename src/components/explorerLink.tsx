import React from "react";
import { Typography } from "antd";
import { shortenAddress } from "./../utils/utils";

export const ExplorerLink = (props: {
  address: string;
  type: string;
  code?: boolean;
  style?: React.CSSProperties;
}) => {
  const { address, type, code } = props;

  if (!address) {
    return null;
  }

  return (
    <a
      href={`https://explorer.solana.com/${type}/${address}`}
      // eslint-disable-next-line react/jsx-no-target-blank
      target="_blank"
    >
      {code ? (
        <Typography.Text code>{shortenAddress(address, 11)}</Typography.Text>
      ) : (
        shortenAddress(address, 11)
      )}
    </a>
  );
};
