"use client";
import React, { useEffect, useState, useRef } from "react";

const Scrollspy = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sectionRefs: any = useRef([]);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Iterate through sectionRefs to find the active section
      sectionRefs.current.forEach((ref: any, index: any) => {
        if (ref && ref.offsetTop <= scrollPosition + 300) {
          setActiveSection(index);
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="sticky top-[120px]">
        <div className={activeSection === 0 ? "active" : ""}>Mizanur Ra</div>
        <div className={activeSection === 1 ? "active" : ""}>Mizanur Ra</div>
        <div className={activeSection === 2 ? "active" : ""}>Mizanur Ra</div>
        <div className={activeSection === 3 ? "active" : ""}>Mizanur Ra</div>
      </div>
      <div ref={(ref) => (sectionRefs.current[0] = ref)}>
        <section>
          <div className="container pb-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium aliquam, corporis officia, quod alias, culpa iste
            doloribus quis aperiam ad nesciunt laudantium placeat iure!
            Provident dolorum at repellendus pariatur nisi. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Praesentium aliquam,
            corporis officia, quod alias, culpa iste doloribus quis aperiam ad
            nesciunt laudantium placeat iure! Provident dolorum at repellendus
            pariatur nisi. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Praesentium aliquam, corporis officia, quod alias, culpa iste
            doloribus quis aperiam ad nesciunt laudantium placeat iure!
            Provident dolorum at repellendus pariatur nisi.
          </div>
        </section>
      </div>
      <div ref={(ref) => (sectionRefs.current[1] = ref)}>
        <section>
          <div className="container">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium aliquam, corporis officia, quod alias, culpa iste
            doloribus quis aperiam ad nesciunt laudantium placeat iure!
            Provident dolorum at repellendus pariatur nisi. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Praesentium aliquam,
            corporis officia, quod alias, culpa iste doloribus quis aperiam ad
            nesciunt laudantium placeat iure! Provident dolorum at repellendus
            pariatur nisi. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Praesentium aliquam, corporis officia, quod alias, culpa iste
            doloribus quis aperiam ad nesciunt laudantium placeat iure!
            Provident dolorum at repellendus pariatur nisi.
          </div>
        </section>
      </div>
      <div ref={(ref) => (sectionRefs.current[2] = ref)}>
        <section>
          <div className="container">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium aliquam, corporis officia, quod alias, culpa iste
            doloribus quis aperiam ad nesciunt laudantium placeat iure!
            Provident dolorum at repellendus pariatur nisi. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Praesentium aliquam,
            corporis officia, quod alias, culpa iste doloribus quis aperiam ad
            nesciunt laudantium placeat iure! Provident dolorum at repellendus
            pariatur nisi. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Praesentium aliquam, corporis officia, quod alias, culpa iste
            doloribus quis aperiam ad nesciunt laudantium placeat iure!
            Provident dolorum at repellendus pariatur nisi.
          </div>
        </section>
      </div>
      <div ref={(ref) => (sectionRefs.current[3] = ref)}>
        <section>
          <div className="container">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Praesentium aliquam, corporis officia, quod alias, culpa iste
            doloribus quis aperiam ad nesciunt laudantium placeat iure!
            Provident dolorum at repellendus pariatur nisi. Lorem ipsum dolor
            sit amet consectetur, adipisicing elit. Praesentium aliquam,
            corporis officia, quod alias, culpa iste doloribus quis aperiam ad
            nesciunt laudantium placeat iure! Provident dolorum at repellendus
            pariatur nisi. Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Praesentium aliquam, corporis officia, quod alias, culpa iste
            doloribus quis aperiam ad nesciunt laudantium placeat iure!
            Provident dolorum at repellendus pariatur nisi.
          </div>
        </section>
      </div>
    </div>
  );
};

export default Scrollspy;
