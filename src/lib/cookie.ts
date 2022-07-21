import { MAX_AGE, TOKEN_COOKIE_NAME } from "@/utils/constants";
import { serialize, parse } from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export const setTokenCookie = (res: NextApiResponse, token: string) => {
	const cookie = serialize(TOKEN_COOKIE_NAME, token, {
		maxAge: MAX_AGE,
		expires: new Date(Date.now() + MAX_AGE),
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		path: "/",
		sameSite: "lax",
	});

	res.setHeader("Set-Cookie", cookie);
};

export const removeTokenCookie = (res: NextApiResponse) => {
	const cookie = serialize(TOKEN_COOKIE_NAME, "", {
		maxAge: -1,
		path: "/",
	});
	res.setHeader("Set-Cookie", cookie);
};

export const getTokenCookie = (req: NextApiRequest) => {
	const cookies = parseCookies(req);
	return cookies[TOKEN_COOKIE_NAME];
};

export const parseCookies = (req: NextApiRequest) => {
	return req.cookies;
};
