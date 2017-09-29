import React, { PureComponent } from "react";
import tonal from "tonal";
import PropTypes from "prop-types";

const W = 512;
const H = 120;

class Score extends PureComponent {
  componentDidMount() {
    this.updateCanvas();
  }
  componentDidUpdate() {
    this.updateCanvas();
  }

  updateCanvas() {
    if (window.Vex === undefined) {
      setTimeout(() => this.updateCanvas(), 500);
      return;
    }
    const Vex = window.Vex;
    const { Renderer, Formatter } = Vex.Flow;
    const renderer = new Renderer(this.refs.canvas, Renderer.Backends.CANVAS);
    const ctx = renderer.getContext();
    ctx.clearRect(0, 0, W, H);
    var stave = new Vex.Flow.Stave(0, 0, W - 5);
    stave.addClef("treble").setContext(ctx);
    if (this.props.key) stave.addKeySignature(this.props.key);

    stave.draw();

    Formatter.FormatAndDraw(
      ctx,
      stave,
      this.props.notes.map(function(n) {
        const { letter, acc, oct } = tonal.note.props(n);

        const note = new Vex.Flow.StaveNote({
          keys: [letter + "/" + oct],
          duration: "q"
        });
        if (acc) note.addAccidental(0, new Vex.Flow.Accidental(acc));
        return note;
      })
    );
  }

  render() {
    return <canvas className="Score" ref="canvas" width={W} height={H} />;
  }
}
Score.propTypes = {
  key: PropTypes.string,
  notes: PropTypes.arrayOf(PropTypes.string)
};

export default Score;
