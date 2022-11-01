import {SVG} from '@svgdotjs/svg.js';

export const initializeArtboard = () => {
    console.log('initialize artboard');

    // Create an SVG document
    const draw = SVG().addTo('#drawing').size('100%', 500);
    const rect = draw.rect(100, 100).attr({fill: '#f06'});
    rect.click(() => {
        console.log('rect clicked');
    });
};
