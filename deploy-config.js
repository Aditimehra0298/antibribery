// Deployment configuration for different environments
const config = {
  development: {
    mediaPath: '/',
    videoFile: '/invideo-anti-bribery-compliance.mp4',
    logoFile: '/image (3).png'
  },
  production: {
    mediaPath: 'https://eurocertantibribery.netlify.app',
    videoFile: 'https://eurocertantibribery.netlify.app/invideo-anti-bribery-compliance.mp4',
    logoFile: 'https://eurocertantibribery.netlify.app/image (3).png'
  }
};

module.exports = config; 