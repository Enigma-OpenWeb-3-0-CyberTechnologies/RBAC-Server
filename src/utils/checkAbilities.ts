const adminAbility = require('../abilities/adminAbility');
const publisherAbility = require('../abilities/publisherAbility');
const userAbility = require('../abilities/userAbility');

export default function checkAbilities(role: String, eventType: String, component: String){
    let response;

    switch(role){
        case "admin":
            response = adminAbility.can(eventType, component);
            return response;
        case "publisher":
            response = publisherAbility.can(eventType, component);
            return response;
        case "user":
            response = userAbility.can(eventType, component);
            return response;
    }
}