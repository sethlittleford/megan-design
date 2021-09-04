import React from 'react'
import * as HandwrittenSVG from './'

const mapImageToSVG = new Map();
mapImageToSVG.set('bluebirds', <HandwrittenSVG.Bluebirds />);
mapImageToSVG.set('tropical_sloths', <HandwrittenSVG.TropicalSloths />);
mapImageToSVG.set('wildflowers', <HandwrittenSVG.Wildflowers />);
mapImageToSVG.set('blueberries', <HandwrittenSVG.Wildflowers />);
mapImageToSVG.set('doves', <HandwrittenSVG.Wildflowers />);
mapImageToSVG.set('neutral_rainbows', <HandwrittenSVG.Wildflowers />);
mapImageToSVG.set('poppies', <HandwrittenSVG.Wildflowers />);
mapImageToSVG.set('succulents', <HandwrittenSVG.Wildflowers />);
mapImageToSVG.set('sunrise', <HandwrittenSVG.Wildflowers />);

export { mapImageToSVG };
