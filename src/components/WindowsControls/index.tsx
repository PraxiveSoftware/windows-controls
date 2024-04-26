import React, { useState } from 'react';
import WindowsControl from '../WindowsControl';

interface Props {
  dark?: boolean;
  onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMaximize?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMinimize?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
  isMaximized?: boolean;
}

const WindowsControls = ({
  dark,
  onClose,
  onMaximize,
  onMinimize,
  onMouseUp,
  style,
  isMaximized,
}: Props) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseUp = (event: React.MouseEvent<HTMLDivElement>) => {
    onMouseUp?.(event);
  };

  return (
    <div onMouseUp={handleMouseUp} style={{ display: 'flex', ...style }}>
      <WindowsControl minimize whiteIcon={dark} onClick={onMinimize} />
      <WindowsControl
        maximize={!isMaximized}
        restore={isMaximized}
        whiteIcon={dark}
        onClick={onMaximize}
      />
      <WindowsControl close whiteIcon={dark} onClick={onClose} />
    </div>
  );
};

export default WindowsControls;
