const NotFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const ErrorHandler = (error, req, res, next) => {
  const code = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(code);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === "production" ? null : error.stack,
  });
};

export { NotFound, ErrorHandler };
