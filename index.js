"use strict";



if(!Object.prototype.merge){

    Object.defineProperty(Object.prototype , "merge" , {
        value : function(object){
            if(!(object instanceof Object)) throw { TypeError : "" };
            let context = this ;


            Object.entries(object).map(function([ key , value ]){
                if(context.hasOwnProperty( key )){
                    if( value instanceof Object ){ 
                        context[key] = context[key].merge(value);
                    }
                    else {
                        context[key] = value;
                    }
                }
                else {
                    context[ key ] = value
                }
            });
            return this;
        } ,
        writable : false ,
        configurable : false,
    })
}



// example

const obj1 = { name : "pp" , test : { static : "yes" }};
const obj2 = { name : "" , test : { static : "no" , add : true } }
console.log(obj1.merge( obj2 ));

// output
// { name: '', test: { static: 'no', add: true } }

