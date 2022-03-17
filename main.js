module.exports.loop = function(){
    for(const creppIndex in Game.creeps){
        const creep =Game.creeps[creppIndex];

        const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
        console.log(creep.memory.isWorking);
        isWorking(creep);
        if(creep.memory.isWorking == true && creep.harvest(source) == ERR_NOT_IN_RANGE){ creep.moveTo(source); }
        else if(creep.memory.isWorking == false && creep.transfer(Game.spawns["CORE"], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE){creep.moveTo["CORE"]}
     

    }
}