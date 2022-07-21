import { getTokenCookie, setTokenCookie } from "@/lib/cookie";
import { MAX_AGE } from "@/utils/constants";
import Iron from "@hapi/iron";
import { IncomingMessage } from "http";
import { NextApiRequest, NextApiResponse } from "next";

type Session = {
	token: string;
	createdAt: number;
	maxAge: number;
};

export const createUserSession = async (
	res: NextApiResponse,
	token: string
) => {
	const createdAt = Date.now();
	const session: Session = {
		token,
		createdAt,
		maxAge: MAX_AGE,
	};
	const secureSession = await Iron.seal(
		session,
		process.env.SESSION_SECRET,
		Iron.defaults
	);
	setTokenCookie(res, secureSession);
};

export const getUserSession = async (req: NextApiRequest) => {
	const cookie = getTokenCookie(req);
	if (!cookie) {
		return null;
	}
	const session: Session = await Iron.unseal(
		cookie,
		process.env.SESSION_SECRET,
		Iron.defaults
	);
	if (!session) {
		return null;
	}
	if (session.maxAge && Date.now() > session.createdAt + session.maxAge) {
		return null;
	}
	return session;
};
