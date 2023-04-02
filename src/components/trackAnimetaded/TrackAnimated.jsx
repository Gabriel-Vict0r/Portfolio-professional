import React from "react";
import "../../sass/components/trackAnimated.sass";
import Reveal from "react-reveal/Reveal";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const TrackAnimated = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["&lt; Desenvolvedor Web /&gt; ^1000", "&lt; Desenvolvedor Fron-end /&gt;", "&lt; Desenvolvedor FullStack /&gt;"],
      typeSpeed: 70,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: '|', 
      backSpeed: 70
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <Reveal bottom={true}>
      <section className="text-animated">
        <h2 className="text-animated-title" ref={el}></h2>
      </section>
    </Reveal>
  );
};

export default TrackAnimated;
