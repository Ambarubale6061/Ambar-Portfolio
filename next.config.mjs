/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: {
    appIsrStatus: false,
    buildActivity: false,
    staticIndicator: false, // v16+ मधील स्टॅटिक इंडिकेटर पूर्णपणे बंद करतो
  },
};

export default nextConfig;
