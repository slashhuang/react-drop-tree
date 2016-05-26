# react-drop-tree

>使用react构建pc端应用的下拉菜单解决方案

> Multidrop-downMenu 渲染树状层级勾选框，可支持无限层级,仅仅依赖简单的数据结构
 
>DropDownMenu 渲染单层下拉列表
 
>drop-downSelect 渲染单层下拉单选框
 
>drop-downSuggestion 渲染联想词下拉框

## code example(代码示例)

``` javascript
 let mockMultiDropData=[
            {
                "typeName": "第1.0级",
                "children": [
                    {
                        "typeName": "第2.0级",
                        "children": [
                            {
                            "typeName": "第3.0级",
                            "children": [ ],
                            "leaf":true
                            },
                            {
                                "typeName":"第3.1级",
                                "children": [{
                                    "typeName":"第4.0级",
                                    "children": [
                                        {
                                            "typeName":"第5.0级",
                                            "children": [ ],
                                            "leaf":true
                                        },
                                        {
                                            "typeName": "第5.1级",
                                            "children": [ ]
                                        },
                                        {
                                            "typeName": "第5.2级",
                                            "children": [ ],
                                            "leaf":true
                                        }]
                                    },
                                    {
                                        "typeName": "第3.2级",
                                        "children": [ ]
                                    },
                                    {
                                        "typeName": "第3.3级",
                                        "children": [ ],
                                        "leaf":true
                                    }]
                            },
                            {
                                "typeName": "第3.2级",
                                "children": [ ]
                            },
                            {
                                "typeName": "第3.3级",
                                "children": [ ],
                                "leaf":true
                            }
                        ]
                    },
                    {
                        "typeName": "第2.1级",
                        "children": [ ],
                        "leaf":true
                    }
                ]
            },
            {
                "typeName": "第1.1级",
                "children": [
                    {
                        "typeName":"第2.0级",
                        "children": [
                            {
                                "typeName": "3.0级",
                                "children": [ ],
                                "leaf":true
                            }
                        ]
                    }
                ]
            }
        ];
    import React, { Component } from 'react';
    import {render} from 'react/lib/ReactDOM';    
	import {drop-downMenu, Multidrop-downMenu, drop-downSelect,drop-downSuggestion} from "react-drop-tree";
    	class ModuleName extends Component {
    	render(){
             <Multidrop-downMenu drop-downData={mockMultiDropData} keyName='typeName' leafName='leaf' title="树状列表选择" ref="Multidrop-downMenu"/>
    	}
    	}
```
## UI展示
>树状下拉选项图
![树状下拉选项图](/assets/react-drop-tree.png)

>普通下拉单选和展示
![普通下拉单选和展示](/assets/react-drop-tree-demo.png)

## instructions[使用方式]
> 请参考example/src/index.js文件

## download(下载)

```	bash
    #usage
        npm install react-drop-tree
	#demo
	    npm run demo	
```


