/* modified based on https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_hover */
import './Dropdown.css';

export default function Dropdown(props) {
    return (
        <div class='dropdown'>
            <button class='dropbtn'><i class="fa-solid fa-bars"></i></button>
            <div class='dropdown-content'>
                {props.menuItems.map((item, idx) => (
                    <a href='#' key={`dd_${idx}`}>{item}</a>
                ))}
            </div>
        </div>
    );
};