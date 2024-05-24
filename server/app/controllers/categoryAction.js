// Some data to make the trick

const categories = [
    {
      id: 1,
      name: "Science-Fiction",
    },
    {
      id: 2,
      name: "Comédie",
    },
  ];
  
  // Declare the actions
  
  const browse = (req, res) => {
    if (req.query.cat != null) {
      const filteredCategories = categories.filter((cat) =>
        cat.name.includes(req.query.cat)
      );
  
      res.json(filteredCategories);
    } else {
      res.json(categories);
    }
  };
  
  const read = (req, res) => {
    const parsedId = parseInt(req.params.id, 10);
  
    const category = categories.find((cat) => cat.id === parsedId);
  
    if (category != null) {
      res.json(category);
    } else {
      res.sendStatus(404);
    }
  };
  
  // Export them to import them somewhere else
  
  module.exports = { browse, read };