import React, { FC, ButtonHTMLAttributes } from 'react';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => <button {...props} />;

export default Button;
