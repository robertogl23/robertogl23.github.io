import { useGlobe } from "../hooks/useGlobe";

export const Globe = () => {
  const { canvasRef } = useGlobe();
  return (
    <canvas
      className="globe"
      ref={canvasRef}
      style={{ width: 300, height: 300 }}
    />
  );
};
