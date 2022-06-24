import { useEffect, useRef } from "react";

export default function Index() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const context = canvas.getContext('2d') as CanvasRenderingContext2D
      const imageOjb = new Image();
      imageOjb.src = '/diplome-orange-1.jpg'
      imageOjb.onload = () => {
        context.drawImage(imageOjb, 0, 0, canvas.width, canvas.height);
        context.font = '500 35pt Roboto';
        context.fillText('CKC Coublevie', canvas.width / 3 - 30, canvas.height / 2 + 10);

      }
    }
  }, []);

  return (
    <canvas ref={canvasRef} width={2339} height={1654}  />
  );
}
