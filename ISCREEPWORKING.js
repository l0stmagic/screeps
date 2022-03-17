module.exports = {
    run: function(creep){
        const isCreepWorking = creep.memory.isWorking;
        if(isCreepWorking == true && creep.carry.energy >= creep.carryCapacity){
            return creep.memory.isWorking = false;
        }
        else if(isCreepWorking == false && creep.carry.energy < creep.carryCapacity){
            return creep.memory.isWorking = true;
        }
    }
}