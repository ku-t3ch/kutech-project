/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    basePath: "/projects",
    output: "standalone",
    env: {
        NEXT_PUBLIC_API_URL: "https://tech.nisit.ku.ac.th/cms",
    }
};

export default config;
