import client from "./client";

export const getToken = () => client.get("/auth/token");
