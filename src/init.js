import GAME_STATE from "./gameState";

const TICK_RATE = 3000;

async function init() {
  console.log("Starting Game");

  //Track next time to call tick(), which is st "now" when the ganme starts/inits
  let nextTimeToTick = Date.now();

  //Closure to keep track of our time. Closure encapsulate the state of nextTimeToTick sow we can use it to advance the clock and therefor the game
  function nextAnimationFrame() {
    const NOW = Date.now();

    //Check if it is time to tick
    if (nextTimeToTick <= NOW) {
      //call tick()
      GAME_STATE.tick();
      // Advance the clock by tick rate
      nextTimeToTick = NOW + TICK_RATE;
    }

    // Reschedule call of callback if browser is idle
    requestAnimationFrame(nextAnimationFrame);
  }

  requestAnimationFrame(nextAnimationFrame);
}

init();
