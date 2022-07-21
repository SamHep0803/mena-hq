import { verify } from "crypto";
import passport from "passport";
import OAuth2Strategy, { VerifyCallback } from "passport-oauth2";

passport.serializeUser((user: any, done) => {
	done(null, user);
});

passport.deserializeUser((id: string, done) => {
	done(null, null);
});

const options = {
	authorizationURL: `${process.env.VATSIM_URL}/oauth/authorize?response_type=code`,
	tokenURL: `${process.env.VATSIM_URL}/oauth/token`,
	scope: process.env.VATSIM_SCOPE,
	clientID: process.env.VATSIM_CLIENT_ID,
	clientSecret: process.env.VATSIM_CLIENT_SECRET,
	callbackURL: process.env.CALLBACK_URL,
};

passport.use(
	new OAuth2Strategy(
		options,
		(
			accessToken: string,
			refreshToken: string,
			profile: any,
			done: VerifyCallback
		) => {
			return done(null, accessToken);
		}
	)
);

export default passport;
