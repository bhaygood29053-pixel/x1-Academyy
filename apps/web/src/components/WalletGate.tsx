"use client";

import { useWallet } from "@solana/wallet-adapter-react";

import { authChallenge, authVerify } from "@/lib/api";

function encodeBase64(bytes: Uint8Array): string {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary);
}

export function WalletGate({ children }: { children: React.ReactNode }) {
  const { publicKey, signMessage, connected } = useWallet();

  async function authenticate() {
    if (!publicKey || !signMessage) return;

    const pubkey = publicKey.toBase58();
    const challenge = await authChallenge(pubkey);

    const message = `X1Academy:${challenge.nonce}`;
    const encoded = new TextEncoder().encode(message);
    const signature = await signMessage(encoded);

    const verify = await authVerify(pubkey, encodeBase64(signature));
    localStorage.setItem("x1academy_token", verify.token);
    localStorage.setItem("x1academy_pubkey", verify.pubkey);
  }

  if (!connected) {
    return <div>Please connect your wallet.</div>;
  }

  const token = typeof window !== "undefined" ? localStorage.getItem("x1academy_token") : null;

  if (!token) {
    return (
      <button onClick={authenticate} style={{ padding: 12, borderRadius: 12 }}>
        Authenticate
      </button>
    );
  }

  return <>{children}</>;
}
