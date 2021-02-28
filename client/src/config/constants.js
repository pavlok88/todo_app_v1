const serverIP = "localhost";
const serverPort = env === "production" ? 3000 : 9632;

const CONST = {
  BASE_URL: `http://${serverIP}:${serverPort}/api`,
  ACCESS_TOKEN_LS_NAME: 'token',
};

export default CONST;
