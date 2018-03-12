// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};


const createNotEnumerableProperty = (propertyName) => {
    return Symbol(propertyName);
};

const createProtoMagicObject = () => {

    let f = function(){};

    f.prototype = f.__proto__;

    return f;
};
const incrementor = () => {
    if(!incrementor.count){
        incrementor.count = 0;

        incrementor.toString = function(){
            return  incrementor.count;
        }
    }

    incrementor.count++;

    return incrementor;
};



const asyncIncrementor = () => {
    if(!asyncIncrementor.count){
        asyncIncrementor.count = 0;

        asyncIncrementor.toString = function(){
            return  asyncIncrementor.count;
        }
    }

    asyncIncrementor.count++;

    return asyncIncrementor;

};


const createIncrementer = () => {
    
    let value = 0;
    let inc = {  
        next(){
            value++;
    
            return {
                done: false,
                value:value
              };
        }
    };

    inc[Symbol.iterator] = () => {
        return {next:inc.next};
    };

        return inc;
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
        resolve(param);
      }, 1000);
    });
};

const getDeepPropertiesCount = (obj) => {
    let count = 0;

    for(let key in obj){
        count++;
        count += getDeepPropertiesCount(obj[key]);
    }

    return count;
};

const createSerializedObject = () => {
   return null;
};


const toBuffer = () => {};
const sortByProto = (array) => {
    const temp = [];

    for(let i = 0; i < array.length; i++){
        temp.push({
            index:i,
            value:0
        });
        let proto = Object.getPrototypeOf(array[i]);
        while(proto){
            temp[i].value++;
            proto = Object.getPrototypeOf(proto);
        }
    }

    temp.sort((l,r) => {
        return r.value - l.value;
    });

    const result = [];

    for(let i = 0; i < array.length; i++){
        result.push(array[temp[i].index]);
    }

    return result;

};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;


