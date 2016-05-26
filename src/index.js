require('../css/index.less');
import DropMenu from './components/DropMenu.js';//单向下拉菜单
import MultiDropMenu from './components/MultiDropMenu.js';//下拉层级菜单
import DropSelect from "./components/DropSelect.js";//下拉多选框
import DropSuggestion from "./components/DropSuggestion.js";//联想功能组件
let DropTree={
    DropMenu,
    MultiDropMenu,
    DropSelect,
    DropSuggestion
};
(function (root) {
    root['DropTree']=DropTree;
}(typeof window!=='undefined'?window:this));
module.exports=DropTree;

