const isWorking = require('ISCREEPWORKING');



function LocateSources(creep){
    const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);


    if(creep.memory.isWorking == true && creep.harvest(source) == ERR_NOT_IN_RANGE){ creep.moveTo(source); }


}


module.exports = {
    run: function(creep) {
        isWorking.run(creep);

        const energy creep.pos.findClosestByRange (FIND_MY_STRUCTURES, {filter: (s) => (s.structureType == STRUCTURE_SPAWN || s.structureType == STRUCTURE_EXTENTION) && s.energy < s.energyCapacity});


        if(creep.memory.isWorking == false)
        {
            if(energy != undefined && creep.transfer(energy, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){creep.moveTo(energy);}
            else{
                if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE){creep.moveTo(creep.room.controller);}
            }
        }
        else{ LocateSorces(creep); }
     

    }
}