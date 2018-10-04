class SAP {
    constructor() {
        this.entities = {}
        this.components = {}
        this.count = 0
    }
    add_entity(entity) {
        this.entities[entity.name] = entity
    }
    entity(entity) {
        return this.entities[entity];
    }

    render(entity="") {
        if (entity !== "") {
            let entc = this.entities[entity].components
            let ent = this.entities[entity].properties

            for (let i = 0; i < entc.length; i++) {
                if (entc[i].update) {
                    entc[i].update(ent)
                }
            }
            if (keyIsPressed === true) {
                this.key_press(entity)
            }
        } else {
            for ( let i = 0; i < Object.keys(this.entities).length; i++) {
                let entity = Object.keys(this.entities)[i]
                this.render(entity)
            }
        }
    }
    key_press(entity="") {
        if (entity === "") {
            for ( let i = 0; i < Object.keys(this.entities).length; i++) {
                let entity = Object.keys(this.entities)[i]
                this.key_press(entity)
            }
        } else {
            let entc = this.entities[entity].components
            let ent = this.entities[entity].properties
            for (let i = 0; i < entc.length; i++) {
                if (entc[i].key_press) {
                    entc[i].key_press(ent)
                }
            }
        }
    }
}

class Entity {
    constructor(name, x=0, y=0, scale_x=100, scale_y=100) {
        this.components = []
        this.id =
            (+new Date()).toString(16) +
            ((Math.random() * 100000000) | 0).toString(16)
        this.name = name;
        this.properties = {
            dimensions: {
                x: scale_x,
                y: scale_y
            },
            position: {
                x: x,
                y: y
            },
            rotation: 0
        };
        return this;
    }
    add_component(component) {
        this.components.push(component)
    }
}

class Component {
    constructor(name, update, key_press) {
        this.name = name;
        if (update) {
            this.update = update
        }
        if (key_press) {
            this.key_press = key_press
        }
    }
}

const quad_body = new Component("quad_body",
    update=(ent)=>{
    rect(ent.position.x, ent.position.y, ent.dimensions.x, ent.dimensions.y)
})
