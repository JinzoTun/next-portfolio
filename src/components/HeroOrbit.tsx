import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";


export const HeroOrbit = ({ 
    children,
    size,
    rotation,
    spinDuration,
    orbitDuration,
    isSpinning = false,
    isOrbiting = false,
}: PropsWithChildren<
{ 
  size: number; 
  rotation: number;
  isSpinning?: boolean;
  isOrbiting?: boolean;
  spinDuration?: number; 
  orbitDuration?: number;
}> ) => {
    return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ">
      <div className={twMerge(isOrbiting === true && "animate-spin " )}
      style={{animationDuration: `${orbitDuration}s`}}>
      <div 
        className="flex items-start justify-start"
        style={{
        transform: `rotate(${rotation}deg)`,
        height: `${size}px`,
        width : `${size}px`,
      }}>
        <div className={twMerge(isSpinning === true && "animate-spin ")} 
        style={{
            animationDuration: `${spinDuration}s`
          }}>
        <div className="inline-flex" 
        style={{
            transform: `rotate(${rotation * -1}deg)`,
        }}>
            {children}
        </div>
      </div>
      </div>
      </div>
    </div>
    )
}
