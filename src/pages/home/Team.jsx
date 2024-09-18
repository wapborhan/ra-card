const Team = () => {
  return (
    <section id="main-container" className="main-container pb-0">
      <div className="ts-team">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="section-title">
                <span>Profile of </span> Directors
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div id="ts-team-standard" className="ts-team-standard">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="ts-team-info">
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="images/team/avatar.jpg"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="team-name">Babul Ahmed</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ts-team-info">
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="images/team/avatar.jpg"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="team-name">Golam Mostafa Rubel</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ts-team-info">
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="images/team/avatar.jpg"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="team-name">Nazmul Alam</h3>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="ts-team-info">
                <div className="team-img">
                  <img
                    className="img-fluid"
                    src="images/team/avatar.jpg"
                    alt=""
                  />
                </div>
                <div className="team-content">
                  <h3 className="team-name">Imtiaj Ahmed</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
