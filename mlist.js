import React,{Component} from 'react';
import List from './dataList';

export default class MList extends Component{
	constructor(props){
		super(props);
		this.data = JSON.parse(this.props.data);
	}
	render(){
		console.log(this.parse(this.data));
		return <div>{this.parse(this.data)}</div>;
	}

	parse(data){
		let boxData = [];
		$.each(data,(k,v)=>{
			if(v.main){
				let main = JSON.stringify(v.main);
				let sublist = this.parse(v.list);
				let boxUnit = <div><List data={main}/>{sublist}</div>;
				boxData.push(boxUnit);
			}
			if(!v.main){
				let unit = JSON.stringify(v);
				boxData.push(<List data={unit}/>);
				return boxData;
			}
		})
			return boxData;
	}
}
