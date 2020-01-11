import React from 'react';

import { CustomButtonBase } from './customButton.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonBase {...props}>{children}</CustomButtonBase>
);

export default CustomButton;
