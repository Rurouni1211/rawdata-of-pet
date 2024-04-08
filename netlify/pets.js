const handler = async () => {
  return {
    statusCode: 200,
    headers: { "Content-Type": "tex/plain" },
    body: 2 + 2,
  };
};

module.export = { handler };
