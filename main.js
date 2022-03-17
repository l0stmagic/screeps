const isWorking = reqire('ISCREEPWORKING');



module.exports.loop = function(){
    for(const creppIndex in Game.creeps){
        const creep =Game.creeps[creppIndex];

        const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
     
        //test
    }
}