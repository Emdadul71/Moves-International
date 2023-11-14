import React from "react";

const ContactMap = () => {
  return (
    <section>
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.6929939463066!2d90.40117771118243!3d23.79394438701365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7c8af919e81%3A0x2cbdfe5d0a8a53bf!2sStudy%20International!5e0!3m2!1sen!2sbd!4v1684406416100!5m2!1sen!2sbd"
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
