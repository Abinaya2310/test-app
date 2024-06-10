

/**
 * @typedef {Object} Example
 * @property {string} title 
 *  * @property {string} description 
 * @property {string} code
 */

/**
 * @typedef {Object} ExamplesType
 * @property {Example} VFX
 * @property {Example} VR
 * @property {Example}ESports
 * @property {Example} Bowling
 */

/**

 * @type {ExamplesType}
 */
const EXAMPLES = {
  VFX: {
    title: "VFX Example",
    description: ".",
    code: `
VFX involves the integration of live-action footage  and generated imagery to create
environments,objects,creatures ,and effects that would be costly, dangerous, or 
outright impossible to capture on film. 
These effects are crafted using advanced computer graphics and cutting-edge technology, 
making them indispensable in today's entertainment industry.
`

  },
  VR: {
    title: "VR Example",
    description: ".",
    code: `
    Virtual Reality (VR) gaming represents one of the most exciting advancements in
    the gaming industry,offering an immersive and interactive experience that
    traditional gaming cannot match. 
    Players can interact with a 3D environment as if they were physically present 
    within the game,enhancing the sense of immersion and presence.
    `
  },
  ESports: {
    title: "ESports Example",
    description: ".",
    code: `
eSports involves organized, multiplayer video game competitions, typically
between professional players or teams. These competitions are often held in arenas, 
stadiums, or online platforms, and are broadcasted to a global audience. eSports 
events range from small local tournaments to large-scale international championships
with substantial prize pools.
    `
  },
  Bowling: {
    title: "Bowling Example",
    description: ".",
    code: `
Bowling video games have evolved significantly since their early days, becoming 
more realistic and immersive with advancements in technology. What started as 
simple 2D representations of bowling has transformed into detailed 3D simulations
that mimic the physics and strategies of real-life bowling.
    `
  }
};


export { EXAMPLES };

