import React, { useEffect, useRef, useState } from "react";

import TimelineObserver from "react-timeline-animation";
import MainWegcard from "./cards/MainWegcard";
// import { fireConfetti } from "./confetti";
const Timeline = ({ setObserver, callback }) => {
  const [message1, setMessage1] = useState("");
  const [message2, setMessage2] = useState("");
  const [message3, setMessage3] = useState("");

  const timeline1 = useRef(null);
  const timeline2 = useRef(null);
  const timeline3 = useRef(null);
  const timeline4 = useRef(null);
  // const timeline5 = useRef(null);
  const circle1 = useRef(null);
  const circle2 = useRef(null);
  const circle3 = useRef(null);
  const circle4 = useRef(null);
  const circle5 = useRef(null);

  const someCallback = () => {
    setMessage1("Step one");
    callback();
  };

  const someCallback2 = () => {
    setMessage2("Step two");
  };

  const someCallback3 = () => {
    // setMessage3("3");
    // fireConfetti();
  };

  const someCallback4 = () => {
    // setMessage2("4");
  };

  const someCallback5 = () => {
    // setMessage2("5");
  };

  useEffect(() => {
    setObserver(timeline1.current);
    setObserver(timeline2.current);
    setObserver(timeline3.current);
    setObserver(timeline4.current);
    // setObserver(timeline5.current);

    setObserver(circle1.current, someCallback);
    setObserver(circle2.current, someCallback2);
    setObserver(circle3.current, someCallback3);
    setObserver(circle4.current, someCallback4);
    setObserver(circle5.current, someCallback5);
  }, []);

  return (
    <>
      {/* left box */}
      <h3 className="heading">Mein Weg</h3>.
      {/* center timeline */}
      <div className="wrapper" >
        <div className="circleWrapper">
          <div id="circle1" ref={circle1} className="circle">
            

            <div className="year-box" style={{backgroundColor:"var(--skin)",color:"var(--darkblue)",padding:"11px  5px",borderRadius:"6px"}}>
              2024
            </div>
          </div>
          <div className="message">
          <MainWegcard head="Lorem Ipsum is simply dummy " text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure"/>
         
          </div>
        </div>
        <div id="timeline1" ref={timeline1} className="timeline" />

        <div className="circleWrapper">
          <div id="circle2" ref={circle2} className="circle">
            
            <div className="year-box" style={{backgroundColor:"var(--skin)",color:"var(--darkblue)",padding:"11px  5px",borderRadius:"6px"}}>
              2023
            </div>
          </div>
          <div className="message2">
          <MainWegcard head="Lorem Ipsum is simply dummy " text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure"/>
             </div>
        </div>
        <div id="timeline2" ref={timeline2} className="timeline" />

        <div className="circleWrapper">
          <div id="circle3" ref={circle3} className="circle">
          <div className="year-box" style={{backgroundColor:"var(--skin)",color:"var(--darkblue)",padding:"11px  5px",borderRadius:"6px"}}>
              2022
            </div>
          </div>
          <div className="message">
       <MainWegcard head="Lorem Ipsum is simply dummy " text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure"/>
          </div>
        </div>
        <div id="timeline3" ref={timeline3} className="timeline" />

        <div className="circleWrapper">
          <div id="circle4" ref={circle4} className="circle">
          <div className="year-box" style={{backgroundColor:"var(--skin)",color:"var(--darkblue)",padding:"11px  5px",borderRadius:"6px"}}>
              2021
            </div>
          </div>
          <div className="message2">
       
          <MainWegcard head="Lorem Ipsum is simply dummy " text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure"/>
          </div>
        </div>
        <div id="timeline4" ref={timeline4} className="timeline" />

        <div className="circleWrapper">
          <div id="circle5" ref={circle5} className="circle">
          <div className="year-box" style={{backgroundColor:"var(--skin)",color:"var(--darkblue)",padding:"11px  5px",borderRadius:"6px"}}>
              2020
            </div>
          </div>
          <div className="message">
          
       <MainWegcard head="Lorem Ipsum is simply dummy " text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure"/>
          </div>
        </div>
        {/* <div id="timeline5" ref={timeline5} className="timeline" /> */}
      </div>

      {/* right box */}
    </>
  );
};

export default function App() {
  const [message, setMessage] = useState("");

  const onCallback = () => {
    console.log("awesome");
  };

  return (
    <div className="App" style={{margin:"5rem 0 12rem 0"}}>
      <TimelineObserver
        initialColor="
        #f4eae1"
        fillColor=" var(--darkblue)"
        handleObserve={(setObserver) => (
          <Timeline
            callback={onCallback}
            className="timeline"
            setObserver={setObserver}
          />
        )}
      />
      {/* <div className="stub2">{message}</div> */}
    </div>
  );
}














