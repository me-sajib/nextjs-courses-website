const dev = process.env.NODE_ENV === "production";
export const server = dev ? "https://api.example.com" : "http://localhost:3000";
