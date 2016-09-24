import React from 'react';
import ReactDOM from 'react-dom';
import MList from './mlist';

class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state={
			width:'40%',
			marginLeft:"10px",
			searchValue:"search",
		};
		this.search = false;
	}
	render(){
		let textColor = this.search ? "black" : "gray";
		let unit = [{width:"10%",fontSize:"20px",value:"shit",height:"40px"},{height:"40px",width:"30%",fontSize:"20px",value:"shit"},{height:"40px",width:"60%",fontSize:"20px",value:"shit"}];
		let mainunit = [{width:"100%",fontSize:"40px",value:"shit",height:"40px",backgroundColor:"blue",color:"#fff"}];
		let list = [{main:mainunit,list:[{main:unit,list:[unit,unit]}]},{main:mainunit,list:[{main:unit,list:[unit,unit]}]},{main:mainunit,list:[{main:unit,list:[unit,unit]}]}];
		list = JSON.stringify(list);
		return(
			<div style={{position:"relative",height:"1000px"}}>
			<input onFocus={this.focus.bind(this)} onChange={this.input.bind(this)} onKeyUp={this.enter.bind(this)} style={{height:'20px',color:textColor,width:this.state.width,fontSize:"20px",textAlign:"left",position:"absolute",right:"10%",padding:"5px",marginLeft:this.state.marginLeft,marginRight:"auto"}} type='text' value={this.state.searchValue}/>
			<div style={{position:"relative",top:"80px"}}>
			<MList data={list} />
			</div>
			</div>
		)
	}
	input(e){
		console.log(e);
		if(this.search == false){
			this.search = true;
			this.setState({width:"80%",marginLeft:"auto"});
			e.target.value = '';
		}
		this.setState({searchValue:e.target.value});
	}
	focus(e){
		this.setState({width:"80%",marginLeft:"auto"});
	}
	enter(e){
		console.log(this);
		if(e.keyCode == 13){
			this.searchFromServer(e.target.value);
		}
	}
	searchFromServer(name){
		console.log(name);
	}
	componentDidMount(){

	}
}

ReactDOM.render(<SearchBar/>,document.getElementById("root"));
