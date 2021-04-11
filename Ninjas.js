import React from 'react';

const Ninjas = ({ninjas}) => {
    //Method 1 for ifelse statement:
        const ninjaList = ninjas.map(ninja  => {
            if(ninja.age > 20){
            return (
                <div className="ninja" key={ninja.id}>
                <div>Name: { ninja.name }</div>
                <div>Age: { ninja.age }</div>
                <div>interest: { ninja.interest } </div>
                </div>
            )
            } else {
                return null
            }
        })
//Second method for if else
    // const ninjaList = ninjas.map(ninja => {
    //     return ninja.age > 20 ? (
    //     <div className="ninja" key={ninja.id}>
    //         <div>Name: { ninja.name }</div>
    //         <div>Age: { ninja.age }</div>
    //         <div>interest: { ninja.interest } </div>
    //     </div> 
    //     ) : null;
    // });
    //     return(
    //        <div className="ninja-list">
    //            { ninjaList}
    //        </div>
    //     )
    // } 

    return(
        <div className="ninja-list">
        { ninjaList }
        </div>
     )
 } 
    
export default Ninjas