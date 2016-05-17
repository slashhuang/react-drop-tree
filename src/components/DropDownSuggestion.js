/**
 * Created by slashhuang on 16/5/13.
 * 联想下拉组件
 */
import React, { Component ,PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
export default class DropDownSuggestion extends Component {
    constructor(props,context){
        super(props,context);
        this.state={
            formGroup:[],//满足联想要求的下拉框
            targetContact:{},//选中的目标联系人
            customerClassName:'',
            placeHolder:props.title||'',
            title:'',//展示的数据
            status:false
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
        if(Object.keys(this.state.targetContact).length<1){

        }
        this.formData=this.state.targetContact;
    }
    clickHandler(ele){
        this.setState({
            targetContact:ele,
            status:true,
            title:ele
        });
    }
    handleChange(value){
        var that =this;
        let {url}=this.props;
        this.setState({
            title:value
        });
        fetch(url).then(function(data){
            return data.json()
        }).then((data)=>{
            that.setState({
                formGroup:data['keywords'],
                targetContact:{}
            })
        }).catch(()=>{debugger});
    }
    renderChildMenu(formGroup){
        let XML = formGroup&&formGroup.length>0?<div className="question-multi-menu-body">
            <ul className="select-drop-down-list">
                {
                    formGroup&&formGroup.map((ele)=>{
                        return <li className="select-drop-down-input" onClick={()=>{this.clickHandler(ele)}}>
                            <div>{ele}</div>
                        </li>
                    })
                }
            </ul></div>:<div></div>;
        return XML;
    }
    render(){
        let {formGroup,title,placeHolder}=this.state;
        return(
            <div className={this.state.customerClassName} ref='suggestContainer'>
                <input className="drop-down-suggestion-head"
                       style={{outline:'none'}}
                       value={title}
                       placeholder={placeHolder}
                       onChange={(e)=>this.handleChange(e.target.value)}
                    />
                {this.renderChildMenu(formGroup)}
            </div>
        );
    }
}