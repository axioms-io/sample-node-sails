module.exports = {
  home: function(req, res) {
    return res.json({
      message: 'Your Services'
    });
  },
  public: function(req, res) {
    return res.json({
      message: 'Hello from a public endpoint!'
    });
  },
  private: function(req, res) {
    return res.json({
      message: 'All good. You are authenticated!'
    });
  },
  admin: function(req, res) {
    return res.json({
      message: 'All good. You are authenticated as admin!'
    });
  }
};
