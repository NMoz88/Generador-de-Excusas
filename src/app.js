/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  function excuseGenerator(who, what, when) {
    let rand1 = Math.floor(Math.random() * who.length);
    let rand2 = Math.floor(Math.random() * what.length);
    let rand3 = Math.floor(Math.random() * when.length);

    return who[rand1] + " " + what[rand2] + " " + when[rand3];
  }
  document.getElementById("excuse").innerHTML = excuseGenerator(
    who,
    what,
    when
  );
};
