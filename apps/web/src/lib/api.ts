type AuthChallengeResponse = {
  nonce: string;
};

type AuthVerifyResponse = {
  token: string;
  pubkey: string;
};

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

async function postJSON<T>(path: string, body: Record<string, string>): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  return (await response.json()) as T;
}

export function authChallenge(pubkey: string) {
  return postJSON<AuthChallengeResponse>("/auth/challenge", { pubkey });
}

export function authVerify(pubkey: string, signature: string) {
  return postJSON<AuthVerifyResponse>("/auth/verify", { pubkey, signature });
}
