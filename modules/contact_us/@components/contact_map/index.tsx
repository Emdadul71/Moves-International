import React from "react";

const ContactMap = () => {
  return (
    <section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5542938291264!2d151.20679737644033!3d-33.87537571940075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3d92573717%3A0x609387d7f914eded!2sTelstra%20Deliveries%2C%20Level%202%2F251%20Elizabeth%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sbd!4v1704860966040!5m2!1sen!2sbd"
          width="100%"
          height="690"
          className="lg:h-[690px] h-[450px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
