	let yourBudget = prompt("Ваш бюджет на месяц?", "");
	let shopName = prompt("Название вашего магазина?", "");
	let mainList = {
		budget: yourBudget,
		shop: shopName,
		shopGoods: [],
		employers: {},
		open: true
	};
// Более правильный способ, т.к. в массиве не будет пустых значений

	for (let i = 0; i < 5; i++) {
		let a = prompt("Какой тип товаров будем продавать?", "");
			if ((typeof(a)) === "string" && (a !== null && a != "" && a.length < 50 ) ) {
				mainList.shopGoods.push(a);
				console.log("Всё верно");
		} else {
			i--
				console.log("Не верно!")
		}
	}

	// for (let i = 0; i < 5; i++){
	// 	let a = prompt("Какой тип товаров будем продавать?", "");
	// 	if ((typeof(a)) === "string" && (a !== null && a != "" && a.length < 50 ) ) {
	// 		mainList.shopGoods[i] = a;
	// 		console.log("Всё верно");
	// 	} else {
	// 			console.log("Не верно!")
	// 	}
	// }

	// while (mainList.shopGoods.length < 5) {
	// 	let a = prompt("Какой тип товаров будем продавать?", "");
	// 		if ((typeof(a)) === "string" && (a !== null && a != "" && a.length < 50 ) ) {
	// 			mainList.shopGoods.push(a);
	// 			console.log("Всё верно");
	// 	} else {
	// 			console.log("Не верно!")
	// 	}
	// }



	alert( "Ваш бюджет на 1 день составляет: " + (mainList.budget / 30).toFixed(1) );
	console.log(mainList);