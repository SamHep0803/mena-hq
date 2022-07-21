import { NextApiRequest, NextApiResponse } from "next";
import passport from "@/lib/passport";
import { createRouter } from "next-connect";
import { createUserSession } from "@/lib/auth";

const router = createRouter<NextApiRequest, NextApiResponse>();

const authenticate = (
	method: string,
	req: NextApiRequest,
	res: NextApiResponse
): Promise<string> =>
	new Promise((resolve, reject) => {
		passport.authenticate(method, { session: false }, (error, token) => {
			if (error) {
				reject(error);
			} else {
				resolve(token);
			}
		})(req, res);
	});

router.get(async (req, res) => {
	try {
		const token = await authenticate("oauth2", req, res);
		await createUserSession(res, token);
		res.writeHead(301, { Location: "/" });
		res.end();
	} catch (error) {
		console.error(error);
		res.status(500).send(error);
	}
});

export default router.handler();
