const dev = process.env.NODE_ENV !== "production";
const prod = process.env.HOST_URL;
export const server = dev ? "http://localhost:3000" : "http://localhost:3000";
