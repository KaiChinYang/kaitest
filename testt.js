//it can
WebMidi.enable(function (err) {
  if (err) console.log("An error occurred", err);
  var output = WebMidi.getOutputByName("IAC 驅動程式 IAC 匯流排 1");
  output.playNote("C2", 1, { duration: 1000, velocity: 0.25, time: WebMidi.time + 3000 });
});

const k = 11000
export default k;