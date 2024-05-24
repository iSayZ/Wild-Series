const sayHello = (req, res) => {
  console.info('here',req.query);
  
  res.send(`Welcome to Wild Series, ${req.query.name} !`);
  };

  module.exports = { sayHello };