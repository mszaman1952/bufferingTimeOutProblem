

exports.helloGet = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "Hello This is My first Express Rest API",
  });
};



exports.helloPost = (req, res) => {
  res.status(201).json({
    status: "success",
    data: "Hello This is My first Express Rest API",
  });
};

