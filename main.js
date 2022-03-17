const isWorking = require('role.Worker');

const maxWorkers = 5;


module.exports.loop = function(){
    for(const creppIndex in Game.creeps){
        const creep =Game.creeps[creepIndex];

       
        if(creep.memory.role == "worker"){worker.run(creep); }
    }
for(const spawnIndex in Game.spawns){
    const spawn = Game.spawns[spawnIndex];
    const numOfWorkers = _.filter(Game.crees, (c) => c.memory.role == "worker" && c.memory.home == spawn.name);
    
    
    
    
    if(numOfWorkers.length < maxWorkers){
        var name;
        for(i = 1; i < maxWorkers + 1; i++ ){
            var found = false; 
            for(const workerIndex in numOfWorkers){
                const creep = numOfWorkers[workerIndex];
                if(spawn.name.concat(":Worker").concat(i)== creep.name){ found = true; }
            }
            if(found == false){name= spawn.name.concat(":Worker").concat(i); break;}
        }
        const success = spawn.spawCreep([WORK, CARRY, MOVE], undefined, {memory: {role: "worker",isWorking: false, home: spawn.name}});
    }


}

}