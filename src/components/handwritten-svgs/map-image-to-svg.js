import React from 'react'
import * as HandwrittenSVG from './'

const mapImageToSVG = new Map();
mapImageToSVG.set('bluebirds', <HandwrittenSVG.Bluebirds />);
mapImageToSVG.set('tropical_sloths', <HandwrittenSVG.TropicalSloths />);
mapImageToSVG.set('wildflowers', <HandwrittenSVG.Wildflowers />);

export { mapImageToSVG };
