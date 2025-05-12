import { motion } from "framer-motion";

export default function Logo({ size = "normal" }: { size?: "small" | "normal" | "large" }) {
  const dimensions = {
    small: "w-8 h-8",
    normal: "w-10 h-10",
    large: "w-40 h-40",
  };

  return (
    <div className={`${dimensions[size]} relative flex items-center justify-center`}>
      <motion.div 
        className="relative"
        animate={{ rotateY: 360 }}
        transition={{ 
          duration: 8, 
          ease: "linear", 
          repeat: Infinity 
        }}
      >
        <svg 
          viewBox="0 0 100 100" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Hexagon shape with dots pattern inspired by the logo */}
          <path 
            d="M50 10L86.6 30V70L50 90L13.4 70V30L50 10Z" 
            fill="none" 
            stroke="rgba(79, 70, 229, 0.2)" 
            strokeWidth="1"
          />
          
          {/* Dots pattern */}
          {Array.from({ length: 5 }).map((_, rowIndex) => (
            Array.from({ length: rowIndex * 2 + 1 }).map((_, colIndex) => {
              const y = 30 + rowIndex * 10;
              const xOffset = 50 - (rowIndex * 10);
              const x = xOffset + colIndex * 10;
              const scale = rowIndex === 2 ? 2 : 1;
              
              return (
                <circle
                  key={`${rowIndex}-${colIndex}`}
                  cx={x}
                  cy={y}
                  r={1.5 * scale}
                  fill="#fff"
                  opacity={rowIndex === 2 ? 1 : 0.6}
                />
              );
            })
          ))}
          
          {/* Bottom half mirror image of dots */}
          {Array.from({ length: 4 }).map((_, rowIndex) => (
            Array.from({ length: (4 - rowIndex) * 2 - 1 }).map((_, colIndex) => {
              const y = 70 + rowIndex * 10;
              const xOffset = 50 - ((4 - rowIndex - 1) * 10);
              const x = xOffset + colIndex * 10;
              
              return (
                <circle
                  key={`bottom-${rowIndex}-${colIndex}`}
                  cx={x}
                  cy={y}
                  r={1.5}
                  fill="#fff"
                  opacity={0.6}
                />
              );
            })
          ))}
        </svg>
      </motion.div>
    </div>
  );
}
