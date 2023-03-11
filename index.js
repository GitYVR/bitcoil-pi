const { Gpio } = require("onoff");

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const trigger = async (pinNo) => {
  try {
    const pin = new Gpio(pinNo, "out");
    pin.writeSync(0);
    await sleep(500);
    pin.writeSync(1);
  } catch (e) {
    console.log("Unable to connect with GPIO, running in simulation mode");
  }
};

// trigger 5 - 16, e.g.
// await trigger(5) - A1
// await trigger(16) - C6

// TODO: Discord bot that listens to emoji reaction to dispense