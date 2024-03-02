const obj = {
    _id: 1,

    get id(){
        console.log(`GetID is called`);
        return obj._id;
    },

    set id(newID){
        console.log(`SetID is called`);
        obj._id = newID;
    }
};

console.log( obj.id );
obj.id = 3;

console.log( obj.id );



