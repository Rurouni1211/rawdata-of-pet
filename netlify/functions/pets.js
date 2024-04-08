const handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "tex/plain" },
    body: "ILTD",
  };
};

module.export = { handler };
