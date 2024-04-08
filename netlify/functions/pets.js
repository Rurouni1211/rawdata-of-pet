const handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: "ILTD",
  };
};

module.exports = { handler };
