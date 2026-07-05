const uploadResume = async (req, res, next) => {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: 'No file uploaded',
        });
      }
  
      res.status(200).json({
        success: true,
        message: 'File uploaded successfully',
        data: {
          url: req.file.path,
          publicId: req.file.filename,
          originalName: req.file.originalname,
        },
      });
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = {
    uploadResume,
  };