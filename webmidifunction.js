//import WebMidi from "webmidi";
/*
WebMidi.enable(function (err) {
  if (err) {
    console.log("WebMidi could not be enabled.", err);
  } else {
    console.log("WebMidi enabled!");
  }
});

WebMidi.enable(function (err) {
    console.log(WebMidi.inputs);
    console.log(WebMidi.outputs);
});
  console.log(WebMidi.time);


var output = WebMidi.outputs[0];

//output.playNote("C3");
*/

 WebMidi.enable(function(err) {
   if (err) console.log("An error occurred", err);
   
   WebMidi.outputs[0].playNote("C4", 1, {duration: 2000, velocity: 0.25});
   WebMidi.outputs[0].playNote("D4", 1, {duration: 2000, velocity: 0.25, time: WebMidi.time + 2000});
   WebMidi.outputs[0].playNote("E4", 1, {duration: 2000, velocity: 0.25, time: WebMidi.time + 4000});
   WebMidi.outputs[0].playNote("F4", 1, {duration: 2000, velocity: 0.25, time: WebMidi.time + 6000});
   WebMidi.outputs[0].playNote("G4", 1, {duration: 2000, velocity: 0.25, time: WebMidi.time + 8000});
   WebMidi.outputs[0].playNote("A4", 1, {duration: 2000, velocity: 0.25, time: WebMidi.time + 10000});
   WebMidi.outputs[0].playNote("B4", 1, {duration: 2000, velocity: 0.25, time: WebMidi.time + 12000});
   WebMidi.outputs[0].playNote("C5", 1, {duration: 2000, velocity: 0.25, time: WebMidi.time + 14000});     

/*
   WebMidi.outputs[0].playNote("C3",1);
   WebMidi.outputs[0].stopNote("C3", 1, {time: "+1000"} );
   WebMidi.outputs[0].playNote("D3",1);
   WebMidi.outputs[0].stopNote("D3", 1, {time: "+1000"} );
   WebMidi.outputs[0].playNote("E3",1);
   WebMidi.outputs[0].stopNote("E3", 1, {time: "+1000"} );
   WebMidi.outputs[0].playNote("F3",1);
   WebMidi.outputs[0].stopNote("F3", 1, {time: "+1000"} );
   WebMidi.outputs[0].playNote("G3",1);
   WebMidi.outputs[0].stopNote("G3", 1, {time: "+1000"} );
   WebMidi.outputs[0].playNote("A3",1);
   WebMidi.outputs[0].stopNote("A3", 1, {time: "+1000"} );
   WebMidi.outputs[0].playNote("B3",1);
   WebMidi.outputs[0].stopNote("B3", 1, {time: "+1000"} );*/
 /*  WebMidi.outputs[0].playNote("D3",1);
   WebMidi.outputs[0].playNote("E3",1);
   WebMidi.outputs[0].playNote("F3",1);
   WebMidi.outputs[0].playNote("G3",1);
   WebMidi.outputs[0].playNote("A3",1);
   WebMidi.outputs[0].playNote("B3",1);*/
 });