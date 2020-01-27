let count = 0;

module.exports = (req, res, next) => {
  count++;
  console.log(`Total request: ${count}`);
  return next();
}