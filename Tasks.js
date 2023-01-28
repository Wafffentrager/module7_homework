// 1 задание
const obj = {
	Имя: 'Георгий',
	Фамилия: 'Гарбарчук'
}; 

function fun(name) {
	for (let key in name) {
		
		 if (name.hasOwnProperty(key)) {

			console.log(`${key}: ${name[key]}`); 
		};   
	 
	};
	
};
fun(obj);

// 3 задание
function Obj(obj) {
	let staples = {};
	
	return obj = staples;
  }

  let object = Obj('obj')
  console.log((object));
