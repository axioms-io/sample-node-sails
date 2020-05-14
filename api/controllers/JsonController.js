module.exports = {
  home: function (req, res) {
    return res.json({
      message: 'Sails Sample APIs',
    });
  },
  public: function (req, res) {
    return res.json({
      message: 'Hello from a public endpoint!',
    });
  },
  private: function (req, res) {
    return res.json({
      message: 'All good. You are authenticated!',
    });
  },
  role: function (req, res) {
    var msg;
    switch (req.method) {
      case 'GET':
        msg = 'Sample read.';
        break;

      case 'POST':
        msg = 'Sample created.';
        break;

      case 'PATCH':
        msg = 'Sample updated.';
        break;

      case 'DELETE':
        msg = 'Sample deleted.';
        break;

      default:
        msg = 'Action not support';
        break;
    }
    res.json({
      message: msg,
    });
  },
  sampleRead: function (req, res) {
    return res.json({
      message: 'Sample read.',
    });
  },
  sampleCreate: function (req, res) {
    return res.json({
      message: 'Sample created.',
    });
  },
  sampleUpdate: function (req, res) {
    return res.json({
      message: 'Sample updated.',
    });
  },
  sampleDelete: function (req, res) {
    return res.json({
      message: 'Sample deleted.',
    });
  },
};
