# Sap
A small library for making JavaScript browser games powered by canvas and p5.js

### Basics
Sap is heavily inspired by Unity's Entity Component System. Sap games are split into entities, and components. 
Entities are pretty boring. All they do is serve as something to hold components. Components are how you add behaviour to an entity.

Here is an example of creating a rectange and rendering it to the canvas:
```js
let sap = new Sap()

let box = new Entity("box")
box.add_component(quad_body)

sap.add_entity(box)

function setup() {
    createCanvas(400, 400)
}

function draw() {
    background("#ddd")
    sap.render()
}
```
