const isWorking = require('ISCREEPWORKING');



function LocateSorces(creep){
    const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    if(creep.memory.isWorking == true && creep.harvest(source) == ERR_NOT_IN_RANGE){ creep.moveTo(source); }


}


module.exports = {
    run: function(creep) {
        const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
        isWorking(creep);
        if(creep.memory.isWorking == false && creep.transfer(Game.spawns["CORE"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){creep.moveTo["CORE"]}
        else{ LocateSorces(creep); }
     

    }
}