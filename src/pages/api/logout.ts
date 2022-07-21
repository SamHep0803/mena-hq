import { removeTokenCookie } from "@/lib/cookie";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
	try {
		removeTokenCookie(res);
		res.writeHead(302, { Location: "/" });
		res.end();
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

export default router.handler();
