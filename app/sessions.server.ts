import { createCookieSessionStorage } from "react-router";

type SessionData = {
  userId: string;
};

type SessionFlashData = {
  error: string;
};

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage<SessionData, SessionFlashData>({
    cookie: {
      name: "__session",
      secrets: [process.env.ADMIN_SECRET ?? "adm1nsecret"],
    },
  });

export { getSession, commitSession, destroySession };
