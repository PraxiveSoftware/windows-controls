import React, { useState } from 'react';

import closeIcon from '../../icons/close.svg';
import maximizeIcon from '../../icons/maximize.svg';
import minimizeIcon from '../../icons/minimize.svg';
import restoreIcon from '../../icons/restore.svg';

interface Props {
  maximize?: boolean;
  close?: boolean;
  minimize?: boolean;
  restore?: boolean;
  whiteIcon?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseUp?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onMouseDown?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties; // Use CSSProperties for styling
  disabled?: boolean;
}

const WindowsControl = ({
  maximize,
  close,
  minimize,
  restore,
  whiteIcon,
  onClick,
  style,
  disabled,
}: Props) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = () => setHover(true);
  const onMouseLeave = () => setHover(false);

  let icon: string;

  if (close) icon = closeIcon;
  else if (minimize) icon = minimizeIcon;

  if (maximize) icon = maximizeIcon; // Use strict comparison (===)
  if (restore) icon = restoreIcon;

  const backgroundColor = hover
    ? !close
      ? 'rgba(196, 196, 196, 0.4)'
      : '#e81123'
    : 'transparent';

  const filter = whiteIcon || (close && hover) ? 'invert(100%)' : 'none';

  return (
    <div
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        height: '100%',
        width: 45,
        minWidth: 45,
        position: 'relative',
        transition: '0.2s background-color',
        backgroundColor,
        pointerEvents: disabled ? 'none' : 'auto',
        ...style,
      }}
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          transition: '0.2s filter',
          filter,
          backgroundPosition: 'center',
          backgroundSize: '11px',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${icon})`,
          opacity: disabled ? 0.54 : 1,
        }}
      />
    </div>
  );
};

export default WindowsControl;
