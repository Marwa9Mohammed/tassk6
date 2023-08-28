import React from "react";

function Portfolio() {
  return (
    <div className="container">
      <div>
        <h1 style={{ fontFamily: "fantasy", color: "black" , textShadow:'5px 5px 4px rgba(0, 0, 0, 0.5)'}}>portfolio</h1>

        <div class="container">
          <div class="row">
            
              <div class="col-sm">
                
                <div className="card" style={{ width: "15rem" , marginBottom:"20px",backgroundColor:'#ecc672',color:'#8b0f0f',boxShadow:' 5px 5px 4px rgba(0, 0, 0, 0.7)',height:'8rem',fontSize:'13px'}}>
                  <div className="card-body">
                  <h4 style={{color:'#8b0f0f'}}>LOGO DESIGN</h4>
              <h4 style={{color:'#8b0f0f'}}>________________</h4>
                  </div>
                </div>
              </div>
              <div class="col-sm"><div className="card" style={{ width: "15rem",backgroundColor:'#8b0f0f',color:'#ecc672',boxShadow:' 5px 5px 4px rgba(0, 0, 0, 0.7)' ,height:'8rem'}}>
                  <div className="card-body">
                  <h4 style={{color:'#ecc672'}}>MOBILE DESIGN</h4>
              <h4 style={{color:'#ecc672'}}>__________________</h4>
                  </div>
                </div></div>
              <div class="col-sm"><div className="card" style={{ width: "15rem" , backgroundColor:'#ecc672',color:'#8b0f0f',boxShadow:' 5px 5px 4px rgba(0, 0, 0, 0.7)',height:'8rem'}}>
                  <div className="card-body">
                  <h4 style={{color:'#8b0f0f'}}>WEB DESIGN</h4>
              <h4 style={{color:'#8b0f0f'}}>________________</h4>
                  </div>
                </div></div>
                {/* .,mn */}
            </div>
            <div class="row">
              <div class="col-sm"><div className="card" style={{ width: "15rem",backgroundColor:'#8b0f0f' ,color:'#ecc672',boxShadow:' 5px 5px 4px rgba(0, 0, 0, 0.7)'}}>
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div></div>
              <div class="col-sm"><div className="card" style={{ width: "15rem",backgroundColor:'#ecc672',color:'#8b0f0f' ,boxShadow:' 5px 5px 4px rgba(0, 0, 0, 0.7)'}}>
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div></div>
              <div class="col-sm"><div className="card" style={{ width: "15rem",backgroundColor:'#8b0f0f',color:'#ecc672',boxShadow:' 5px 5px 4px rgba(0, 0, 0, 0.7)' }}>
                  <div className="card-body">
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div></div>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Portfolio;
