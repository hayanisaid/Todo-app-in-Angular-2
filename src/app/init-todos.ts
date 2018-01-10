
export class init{
	load(){
		if(localStorage.getItem("todos")===null || localStorage.getItem('todos')==undefined){
			console.log("Not item Creating...");
			var todos=[
				{text:"I want to perfect angulare"},
				{text:"I'm gonna to USA this month inchallah"},
				{text:"I'll have a nice jobe in NYC "},
				{text:"I'll master the javascrip and Cs inchallah"}
				];
				var item=JSON.stringify(todos);
        localStorage.setItem('todos',item);
		return
		}else{
			console.log("Found todos")
		}
		
	}
}