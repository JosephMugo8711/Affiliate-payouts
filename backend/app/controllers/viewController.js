exports.getOverview = (req, res, next) => {
    res.json({
      message: 'Awesome the web server works!😎',
      author: 'Mzee Mzima',
      year: '2023',
      for: 'Chimoney Project',
    });
  };