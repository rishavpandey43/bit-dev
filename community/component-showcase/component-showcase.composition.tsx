import React from 'react';
import { ComponentShowcase } from './component-showcase';

export const BasicComponentShowcase = () => {
  return <ComponentShowcase componentId="teambit.cloud/apps/bit-cloud" />;
};

const compositionCanvas = {
  minWidth: 2000,
  minHeight: 5000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '500px',
};

BasicComponentShowcase.canvas = compositionCanvas;
