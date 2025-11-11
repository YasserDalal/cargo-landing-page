import "./ShinyText.css";
import { useLanguage } from '../../../context/ContextHooks'

const ShinyText = ({ text, disabled = false, speed = 5, className = "" }) => {
  const animationDuration = `${speed}s`;
  const { language } = useLanguage();
  return (
    <h3
      className={`bg-clip-text inline-block ${
        disabled ? "" : "animate-shine"
      } ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(120deg, rgba(243, 244, 246, 0.5) 40%, rgba(255, 255, 255, 1) 50%, rgba(243, 244, 246, 0.5) 60%)",
        backgroundSize: "200% 100% 200%",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        animationDuration: animationDuration,
        animationDirection: language.english ? "normal" : "reverse",
      }}
    >
      {text}
    </h3>
  );
};

export default ShinyText;

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         shine: {
//           '0%': { 'background-position': '100%' },
//           '100%': { 'background-position': '-100%' },
//         },
//       },
//       animation: {
//         shine: 'shine 5s linear infinite',
//       },
//     },
//   },
//   plugins: [],
// };
