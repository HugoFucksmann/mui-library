import "./cel3dBox.css";

const Cel3dBox = (props) => {
  return (
    <div class='container'>
      <input
        type='checkbox'
        style={{ visibility: "hidden" }}
        class='toggle'
        id='toggle'
        checked='checked'
      />

      <div class='menu'>
        <div class='top'>
          <span class='search'>
            <input type='text' />
          </span>
          <a class='exit' href='#' tabindex='0'></a>
        </div>
        <ul class='middle'>
          {props.menuData.map((data) => (
            <li tabindex='0'>
              <i class='fa fa-calendar'></i>
              {data}
            </li>
          ))}
        </ul>
        <div class='bottom'></div>
        <div class='menu-back'></div>
        <div class='glass-reflection'></div>
      </div>
    </div>
  );
};

Cel3dBox.defaultProps = {
  menuData: [
    "React",
    "NodeJS",
    "Python",
    "Symfony",
    "Twig",
    "Angular",
    "JavaScript",
    "PHP",
  ],
};

export default Cel3dBox;
