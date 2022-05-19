import "./cel3dBox.css";

const Cel3dBox = () => {
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
          <li tabindex='0'>
            <i class='fa fa-calendar'></i>Calendar
          </li>
          <li tabindex='0'>
            <i class='fa fa-camera'></i>Photos
          </li>
          <li tabindex='0'>
            <i class='fa fa-check-square-o'></i>Tasks
          </li>
          <li tabindex='0'>
            <i class='fa fa-map-marker'></i>Places
          </li>
          <li tabindex='0'>
            <i class='fa fa-codepen'></i>Codepen
          </li>
          <li tabindex='0'>
            <i class='fa fa-dribbble'></i>Dribbble
          </li>
          <li tabindex='0'>
            <i class='fa fa-user'></i>User account
          </li>
          <li tabindex='0'>
            <i class='fa fa-cogs'></i>Settings
          </li>
        </ul>
        <div class='bottom'></div>
        <div class='menu-back'></div>
        <div class='glass-reflection'></div>
      </div>
    </div>
  );
};
export default Cel3dBox;
