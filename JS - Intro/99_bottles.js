const bottlesSong = () => {
    let numberOfButtles = 99;

    while (numberOfButtles > 0){
        console.log(`${numberOfButtles} bottles of beer on the wall, ${numberOfButtles} bottles of beer.`);
        numberOfButtles--;
        console.log(`Take one down and pass it around, ${numberOfButtles} bottles of beer on the wall.`);
        
        console.log("\n");
    }

    console.log("No more bottles of beer on the wall, no more bottles of beer.");
    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
}

bottlesSong();