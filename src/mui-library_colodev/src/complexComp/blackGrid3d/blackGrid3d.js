import "./blackGrid3d.css";
const BlackGrid3d = (props) => {
  return (
    <section>
      <div class='container'>
        <div class='feature-grid-container grid grid--columns'>
          <div class='feature-grid-text'>
            <h2 class='fs-700 uppercase text-compressed'>
              WITH BLOCKCHAIN, TRADING WILL{" "}
              <span class='text-primary'>NEVER</span>
              HAVE TO REMAIN CENTRALIZED
            </h2>
            <p>
              Blockchain develops tooling by graphing the DeFi space to build{" "}
              <strong>game changing</strong> products to benefit users
            </p>
            <div class='flex large-gap'>
              <a href='#' class='btn btn--primary uppercase text-primary'>
                Whitepaper
              </a>
              <a href='#' class='btn btn--accent uppercase text-primary'>
                Watch video
              </a>
            </div>
          </div>
          <div class='grid feature-grid'>
            {props.gridData.map((data) => (
              <a href='#' aria-label='Liquidity difference force multiplier'>
                <img src={data} alt='' />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

BlackGrid3d.defaultProps = {
  gridData: [
    "https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Fees.png",
    "https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Brick.png",
    "https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Safe.png",
    "https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Sythetic.png",
    "https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Anti.png",
    "https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/DLO.png",

    "https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Force.png",
  ],
};

export default BlackGrid3d;
