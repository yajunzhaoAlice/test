import MyStory from "./my_story.mjs";

// The Rabbit Mom stands in the front of the door
// Asks the baby "Open the door"
// And say "I am Mom"
// The rabbit baby opens the door

let given="Given: stand in the front of the door";
let when1="When: ask Open the door";
let when2="When: say I am Mom";
let then = "Then: open the door";

let arrStory=[given,when1,when2,then];
let objStory=new MyStory(arrStory);
objStory.Play();