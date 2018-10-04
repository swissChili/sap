// this is a component, a reusable piece of code
// we can apply to different entities

// it passes an anonymous function to the update
// parameter, which takes an entity and modifies
// it's properties
let scroll = new Component("scroll", update=(ent)=>{
    if (ent.position.x < 400) {
        ent.position.x++
    } else {
        ent.position.x = -ent.dimensions.x
    }
    // the key_press parameter is called every time a
    // key is pressed by the uesr
}, key_press=(ent)=>{
    console.log("oof")
    switch(keyCode) {
        // the key code is a JS key code or
        // a pre-defined type, check the
        // p5.js docs for more information
    case UP_ARROW:
        ent.position.y -= 5
        break
    case DOWN_ARROW:
        ent.position.y += 5
        break
    }
})

// the sap class is initialized, by having
// multiple instances of the SAP class one
// can reuse code in different canvases in
// the same JS file
let sap = new SAP()
// this is an entity called box, which we
// can render to the canvas
let box = new Entity("box")
// we can set it's properties like so
box.properties.position.y = 100
box.add_component(scroll)
box.add_component(quad_body)
sap.add_entity(box)
// or set them while create the entity
let box1 = new Entity("box1"
                      ,y=200
                      ,x=200
                      ,scale_x=200)
// the scroll component is added to the entity
// now, the code we defined in the scroll component
// will be called on the box1 entity
box1.add_component(scroll)
// the box is added to the canvas so it can be rendered
sap.add_entity(box1)
box1.add_component(quad_body)
// this is necessary for p5.js
function setup() {
    // this is a p5.js method needed so there's something
    // to draw on
    createCanvas(400, 400)
}

function draw() {
    // some more p5 methods
    fill("#fff")
    stroke("#000")
    background("#222")
    // here's where the magic happens,
    // the render method is called each
    // frame, and it takes our entities, and
    // their components, and renders each of them
    sap.render()
}
