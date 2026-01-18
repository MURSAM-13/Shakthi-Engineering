import "../styles/infrastructure.css";

function Infrastructure() {
  return (
    <div className="infra-page">

      {/* Hero Section */}
      <section className="infra-hero">
        <h1>Infrastructure & Facilities</h1>
        <p>
          World-class manufacturing facility equipped for heavy steel fabrication
        </p>
      </section>

      {/* Content Section */}
      <section className="infra-content">
        <div className="infra-text">
          <h2>Manufacturing Strength</h2>
          <p>
            Our manufacturing facility is spread across a large area and is
            equipped with advanced machinery such as CNC cutting machines,
            submerged arc welding systems, heavy cranes, blasting and painting
            units.
          </p>
          <p>
            The infrastructure enables us to execute large-scale projects for
            railways, industrial buildings, bridges, and PEB structures while
            maintaining strict quality standards.
          </p>
        </div>

        <div className="infra-image">
          <img src="/images/machinery.jpg" alt="Infrastructure" />
        </div>
      </section>

      {/* Machinery Cards */}
      <section className="infra-cards">
        <div className="card">CNC Cutting Machines</div>
        <div className="card">Submerged Arc Welding</div>
        <div className="card">Heavy Cranes & Hydras</div>
        <div className="card">Sand Blasting & Painting</div>
        <div className="card">Quality Inspection Tools</div>
        <div className="card">Large Assembly Bays</div>
      </section>

    </div>
  );
}

export default Infrastructure;
