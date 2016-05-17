require('../css/index.less')
import DropDownMenu from './components/DropDownMenu.js';//单向下拉菜单
import MultiDropDownMenu from './components/MultiDropDownMenu.js';//下拉层级菜单
import DropDownSelect from "./components/DropDownSelect.js";//下拉多选框
import DropDownSuggestion from "./components/DropDownSuggestion.js";//联想功能组件
let DropDown={
    DropDownMenu,
    MultiDropDownMenu,
    DropDownSelect,
    DropDownSuggestion
};
if(window.Eagleui){
    Eagleui.DropDown = DropDown;
}else{
    window.DropDown=DropDown
};
module.exports=DropDown;

