import { getUserSession } from "@/lib/auth";
import { getUser } from "@/lib/user";
import { NextApiRequest, NextApiResponse } from "next";
import { createRouter } from "next-connect";

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
	try {
		const session = await getUserSession(req);
		const user = (session && (await getUser(session.token))) ?? null;
		res.status(200).json({ user });
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
});

export default router.handler();
