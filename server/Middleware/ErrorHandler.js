export default (error, req, res, next) => {
  const code = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(code);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};
