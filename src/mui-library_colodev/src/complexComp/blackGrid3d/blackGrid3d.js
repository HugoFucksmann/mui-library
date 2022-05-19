import "./blackGrid3d.css";
const BlackGrid3d = () => {
  return (
    <body>
      <main>
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
                  Blockchain develops tooling by graphing the DeFi space to
                  build <strong>game changing</strong> products to benefit users
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
                <a href='#' aria-label='Low fees'>
                  <img
                    src='https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Fees.png'
                    alt=''
                  />
                </a>
                <a href='#' aria-label='DLO-Brick'>
                  <img
                    src='https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Brick.png'
                    alt=''
                  />
                </a>
                <a href='#' aria-label='Safe and simple'>
                  <img
                    src='https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Safe.png'
                    alt=''
                  />
                </a>
                <a href='#' aria-label='Synthetic curve'>
                  <img
                    src='https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Sythetic.png'
                    alt=''
                  />
                </a>
                <a href='#' aria-label='Anti slippage'>
                  <img
                    src='https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Anti.png'
                    alt=''
                  />
                </a>
                <a href='#' aria-label='Dex liquidity oracle'>
                  <img
                    src='https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/DLO.png'
                    alt=''
                  />
                </a>
                <a href='#' aria-label='Liquidity difference force multiplier'>
                  <img
                    src='https://raw.githubusercontent.com/kevin-powell/3d-grid-clone/main/images/Force.png'
                    alt=''
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default BlackGrid3d;
