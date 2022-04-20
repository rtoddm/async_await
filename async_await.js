//Question 1: 

function getRandomNumbers (){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(Math.random());
        }, 500);
            //reject(console.log("Oops"));
    });
}

async function asyncNow() {
    console.log('calling');
    const result = await getRandomNumbers ();
    console.log(result);
}

asyncNow();

//Question 2:

async function cityInfo(location){
    const response = await fetch (https://geocode.xyz/seattle?json=1);
    const cityName = await response.json;

let websiteResponse = 
    await fetch (https://geocode.xyz/seattle?json=1);
let location = await websiteResponse.json();
document.body.append(location);
}

cityInfo(Charlotte);

 


