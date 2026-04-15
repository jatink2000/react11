import React from "react";

function Localstorage(){

    // 1. setitem : 
        function savedata(){
            localStorage.setItem("name","groot academy")
            localStorage.setItem("city","jaipur")
            localStorage.setItem("email","groot@gmail.com")
        }

    // 2. getitem : 
        function getdata(){
           let cityvalue= localStorage.getItem("city")
           console.log(cityvalue)
        }


     // 3. removeitem : 
        function removedata(){
            localStorage.removeItem("city")
        }



    // 4. clear: 
        function cleardata(){
            localStorage.clear()
        }


    return(
        <>
            <h1>Local storage component</h1>

            {/* 1. setitem : save the data  */}
                {/* syntex :  */}
                {/* localstorage.setitem(key,value) */}

                <button onClick={savedata}>save the data</button>



            {/* 2. getitem : get / access the data  */}
                {/* syntex :  */}
                {/* localstorage.getitem(key) */}

                <button onClick={getdata}>get the data</button>




            {/* 3. removeitem : remove the key .   */}
                {/* syntex :  */}
                {/* localstorage.removeitem(key) */}

                <button onClick={removedata}>remove the data</button>


            {/* 4. clear:remove all the keys .  */}

                    {/* syntex :  */}
                    {/* localstorage.clear() */}

                <button onClick={cleardata}>clear the data</button>

            

        </>
    )
}

export {Localstorage}