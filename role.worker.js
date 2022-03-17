const isWorking = require('ISCREEPWORKING');



function LocateSources(creep){
    const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);


    if(creep.memory.isWorking == true && creep.harvest(source) == ERR_NOT_IN_RANGE){ creep.moveTo(source); }


}


module.exports = {
    run: function(creep) {
        isWorking.run(creep);
        const energy _.filter(FIND_MY_STRUCTURES, (s) => (s.structureType == STRUCTURE_SPAWN || s.structureType == STRUCTURE_EXTENTION) && s.energy < s.energyCapacity);


        if(creep.memory.isWorking == false && creep.transfer(energy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){creep.moveTo(energy)}
        else{ LocateSorces(creep); }
     

    }
}