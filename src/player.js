import { Note, transpose } from "tonal";
const ac = new AudioContext();
let piano = null;

export const loadPiano = Soundfont => {
  console.log("Loading...");
  return Soundfont.instrument(ac, "acoustic_grand_piano").then(inst => {
    console.log("Piano loaded!");
    piano = inst;
  });
};

const centered = tonic => {
  const pc = Note.pc(tonic);
  const oct = pc[0] === "A" || pc[0] === "B" ? 3 : 4;
  return pc + oct;
};

const buildScale = (tonic, intervals) => {
  const scale = intervals.map(transpose(centered(tonic)));
  const rev = scale.slice().reverse();
  scale.push(transpose(scale[0], "P8"));
  return scale.concat(rev);
};

const buildChord = (tonic, intervals) => {
  return intervals.map(transpose(centered(tonic)));
};

export default (tonic, intervals, type) => {
  if (!piano) return;
  const notes =
    type === undefined
      ? [tonic]
      : type === "scale"
        ? buildScale(tonic, intervals)
        : buildChord(tonic, intervals);
  const events = notes.map((note, i) => ({
    time: type === "chord" ? 0 : i * 0.5,
    note
  }));

  piano.stop(ac.currentTime);
  piano.schedule(ac.currentTime, events);
};
