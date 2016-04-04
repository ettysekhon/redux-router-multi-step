const charge = {
  payload: {
    charge: {
      amount: 3.99
    }
  },
  lastUpdated: '1457432499475'
};

// TODO: create a POST request instead and pass registration
exports.charge = (req, res) => {
  setTimeout(() => {
    res.json(charge);
  }, 1000);
};
