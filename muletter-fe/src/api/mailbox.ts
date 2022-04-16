import client from "./client";

const BASEPATH = "/mailbox";

export const getMailBoxes = () => client.get(`${BASEPATH}`);
