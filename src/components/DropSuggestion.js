/**
 * Created by slashhuang on 16/5/13.
 * 联想下拉组件
 */
import React, { Component ,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import Drawing from '../utils/Drawing.js';//js图形界面

export default class DropSuggestion extends Component {

    constructor(props,context){
        super(props,context);
        this.state={
            formGroup:[],//满足联想要求的下拉框
            targetContact:{},//选中的目标联系人
            customerClassName:'',
            placeHolder:'',
            title:'',//展示的数据
            pressToIndex:-1,//初始化键盘按钮
            status:true//点击enter隐藏
        };
        this.formData=this.state.targetContact;
    }
    componentDidMount(){
        var that=this;
        findDOMNode(this.refs['suggestContainer']).addEventListener('mouseleave',()=>{
            that.judgeStatus();
        });
        this.setState({
            customerClassName:this.props.customerClassName||"drop-down-suggestion",
            placeHolder:this.props.placeHolder||"请填写姓名"
        });
    }
    judgeStatus(){
        this.setState({
            status:false
        });
        if(Object.keys(this.state.targetContact).length<1){
            //alert('请选择列表中的联系人数据');
        }
        this.formData=this.state.targetContact;
    }

    /**
     * 处理点击操作
     * @param ele
     */
    clickHandler(ele){
        this.setState({
            targetContact:ele,
            status:true,
            title:ele
        });
    }
    renderKeyPress(activeIndex){
        let {formGroup}=this.state;//列表总长度
        function lengthHandle(ele){
            if(ele<0){
                return -1
            }else if(ele>=formGroup.length){
                //回归头部
                return 0
            }else{
                return ele
            }
        }
        let renderIndex=lengthHandle(activeIndex);
        if(formGroup&&formGroup[renderIndex]){
            this.setState({
                pressToIndex:renderIndex,
                targetContact:formGroup[renderIndex],
                title:formGroup[renderIndex]
            });
        }else{
            this.setState({
                pressToIndex:renderIndex,
                targetContact:{},
                title:''
            });
        }
    }
    keyHandler(event){
        let keyCode= event.keyCode;
        switch (keyCode) {
            case 27://esc
                break;
                return;
            case 38: //up键
                this.renderKeyPress(--this.state.pressToIndex)
                return;
            case 40: //down键
                this.renderKeyPress(++this.state.pressToIndex)
                return;
            case 13: //enter
                event.preventDefault();
                event.stopPropagation();
                this.renderKeyPress(this.state.pressToIndex);
                this.setState({
                    status:true
                });
                return;
            default:
                break;
        }
    }
    handleChange(value){
        var that =this;
        let {url}=this.props;
        this.setState({
            title:value,
            status:false
        });
        fetch(url).then(function(res){
            return res.json();
        }).then(function(data){
            that.setState({
                formGroup:data.keywords,
                targetContact:{}
            })
        });
    }
    renderChildMenu(formGroup){
        let {pressToIndex,status}=this.state;
        let XML = formGroup&&formGroup.length>0?<div className="question-multi-menu-body">
            <ul className="select-drop-down-list">
                {
                    formGroup&&formGroup.map((ele,index)=>{
                        return <li className={pressToIndex==index?"select-drop-down-input on":'select-drop-down-input'}
                                   onClick={()=>{this.clickHandler(ele)}}>
                            <div>{ele}</div>
                        </li>
                    })
                }
            </ul></div>:<div></div>;
        if(status){
            XML=null;
        }
        return XML;
    }
    cancelInput(){
        this.setState({
            pressToIndex:-1,
            targetContact:{},
            title:''
        });
    }
    render(){
        let {formGroup,title}=this.state;
        let that= this;
        return(

            <div className={this.state.customerClassName} ref='suggestContainer' onKeyDown={this.keyHandler.bind(this)}>
                <div style={{width:'inherit',padding:'7px 9px'}} className="drop-down-suggestion-head">
                    <input style={{outline:'none',border:'none',verticalAlign:'middle'}}
                           value={title}
                           placeholder={this.state.placeHolder}
                           onChange={(e)=>this.handleChange(e.target.value)}
                           onFocus={()=>{
                       this.setState({
                       status:false
                       })
                       }}
                        />
                    <Drawing onClick={()=>{that.cancelInput()}} show={!!this.state.title}/>
                </div>
                {this.renderChildMenu(formGroup)}
            </div>
        );
    }
}