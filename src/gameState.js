const GAME_STATE = {
  current: "INIT",
  clock: 1,
  tick() {
    this.clock++;
    console.log("clock", this.clock);
    return this.clock;
  },
};

export default GAME_STATE;
