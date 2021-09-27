let wilder = require("./information.js");
let cowSay = require("cowsay");

console.log(cowSay.say({
  text: `Hello ! I'm ${wilder.name} from ${wilder.campus} Campus.`,
  e : "oO",
  T : "U" 
}));