const requiredVars = ['PASSWORD', 'URL'];

const missingVars = requiredVars.filter((varName) => !process.env[varName]);

if (missingVars.length > 0) {
	throw new Error(`Missing environment variables: ${missingVars.join(', ')}`);
}

export const Config = {
	PASSWORD: process.env.PASSWORD,
	URL: process.env.URL,
};
