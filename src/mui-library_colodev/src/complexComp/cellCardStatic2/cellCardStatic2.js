import React from "react";
import PropTypes from "prop-types";
import "./cellCardStatic2.css";

const CellCardStatic2 = (props) => {
  return (
    <div className='wrapper'>
      <div className='mainn'>
        {props.contents.map((data, i) => (
          <div key={i + 200} className={"mob example" + (i + 1)}>
            <div className='up'>
              <div className='decorLine'></div>
            </div>
            <div className='middle'>
              <div className='phone-wrapper'>{data}</div>
            </div>
            <div className='down'>
              <div className='circle'></div>
              <div className='furniture'>
                <div className='charger'></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

CellCardStatic2.propTypes = {
  contents: PropTypes.arrayOf(PropTypes.element).isRequired,
};

CellCardStatic2.defaultProps = {
  contents: [
    <>
      <h1 className='number-heading'>01</h1>
      <p className='phone-text'>Psd mockup</p>
      <h2 className='text-heading'>
        the <span className='bold-text'>New Styles</span>
        <span className='gradient-text'> ...</span>
      </h2>
      <div className='horizontal-line'></div>
      <p className='phone-text'>
        Refresh your
        <br />
        mobile app showcase
      </p>
      <p className='made-by-text'>by ColoDev</p>{" "}
    </>,
    <>
      <h1 className='number-heading'>02</h1>
      <p className='phone-text'>Psd mockup</p>
      <h2 className='text-heading'>
        the <span className='bold-text'>New Styles</span>
        <span className='gradient-text'> ...</span>
      </h2>
      <div className='horizontal-line'></div>
      <p className='phone-text'>
        Refresh your
        <br />
        mobile app showcase
      </p>
      <p className='made-by-text'>by ColoDev</p>{" "}
    </>,
    <>
      <h1 className='number-heading'>03</h1>
      <p className='phone-text'>Psd mockup</p>
      <h2 className='text-heading'>
        the <span className='bold-text'>New Styles</span>
        <span className='gradient-text'> ...</span>
      </h2>
      <div className='horizontal-line'></div>
      <p className='phone-text'>
        Refresh your
        <br />
        mobile app showcase
      </p>
      <p className='made-by-text'>by ColoDev</p>{" "}
    </>,
    <>
      <h1 className='number-heading'>04</h1>
      <p className='phone-text'>Psd mockup</p>
      <h2 className='text-heading'>
        the <span className='bold-text'>New Styles</span>
        <span className='gradient-text'> ...</span>
      </h2>
      <div className='horizontal-line'></div>
      <p className='phone-text'>
        Refresh your
        <br />
        mobile app showcase
      </p>
      <p className='made-by-text'>by ColoDev</p>{" "}
    </>,
  ],
};

export default CellCardStatic2;
