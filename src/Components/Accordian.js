import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Accordion.css'; 

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="wrapper center-block shadow p-4 mb-4 bg-white">
      <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        {[1, 2, 3].map((item, index) => (
          <div className="panel panel-default" key={index}>
            <div className={`panel-heading ${activeIndex === index ? 'active' : ''}`} role="tab" id={`heading${item}`}>
              <h4 className="panel-title">
                <a
                  role="button"
                  data-toggle="collapse"
                  data-parent="#accordion"
                  href={`#collapse${item}`}
                  aria-expanded={activeIndex === index}
                  aria-controls={`collapse${item}`}
                  onClick={() => handleToggle(index)}
                >
                  How does Osumares Campaingn 
                  <i className={`fas fa-chevron-down ${activeIndex === index ? 'rotate' : ''}`} />
                </a>
              </h4>
            </div>
            <div id={`collapse${item}`} className={`panel-collapse collapse ${activeIndex === index ? 'in' : ''}`} role="tabpanel" aria-labelledby={`heading${item}`}>
              <div className="panel-body">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
