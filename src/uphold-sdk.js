import SDK from "@uphold/uphold-sdk-javascript";

const CLIENT_ID = "960e78e5c052c35f465f60864fe0db42f01bd08c";
const CLIENT_SECRET = "b55da43669a74c67955153a2ec5dc480098e7426";

const sdk = new SDK({
  baseUrl: "https://api-sandbox.uphold.com",
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET
});

export default sdk;
