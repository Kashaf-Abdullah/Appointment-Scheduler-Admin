import React from 'react'
import cons1 from "../assets/cons1.PNG";
import ConsultingCard from "./cards/ConsultingCard";

const ConsultingSection = () => {
  return (
   <>
     <div className="row" style={{ padding: "6rem 0 3rem 0"}}>
        <div className="col-lg-6 col-md-12 col-sm-12">
          <h4>Lorem ipsum dolor sit amet consectetur adipisicing.</h4>
          <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Ratione quo impedit minus maxime ut! Ipsa, delectus.
           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic?
            <br />
            <br />
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
         
          </p>
          {/* <p className="text" style={{marginTop:"2px"}}>
            Mit unserer Dienstleistung stehen wir Dir zur Seite, um Deine
            digitale Präsenz auf Plattformen wie LinkedIn, TikTok, YouTube
            Shorts und Instagram zu optimieren. Unser Team besteht aus
            erfahrenen Experten, die Dir helfen, das volle Potenzial Deiner
            Social-Media-Strategie auszuschöpfen. Unser Prozess ist darauf
            ausgerichtet, Deine individuellen Bedürfnisse gerecht zu werden und
            maßgeschneiderte Lösungen zu bieten.
          </p> */}
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex align-items-start justify-content-center">
          <img
          // style={{marginLeft:"auto"}}

            src={cons1}
            alt=""
            className="const-card-img"
            data-aos="fade-in"
          />
        </div>
      </div>
      <p className="text" >           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia beatae, eligendi, provident ipsum neque, praesentium facere voluptate ea temporibus ut quidem exercitationem vitae nam voluptas minus a ullam dolor quae.
          </p>
      <div className="row ">
        <ConsultingCard
          head="lorem"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ConsultingCard
          head="lorem"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>

      <div className="row ">
        <ConsultingCard
          head="lorem"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
        <ConsultingCard
          head="lorem"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        />
      </div>
   </>
  )
}

export default ConsultingSection
