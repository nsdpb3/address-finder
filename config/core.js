var ske = 0;
class addressFinder {
	targetAddress = document.querySelector("input");
	_url = "https://62e2906ee8ad6b66d85e7ac9.mockapi.io/products";
	constructor(_data, address, entrance, entranceNum, entranceAppartaments) {
		this._data = _data;
		this.address = address;
		this.entrance = entrance;
		this.entranceNum = entranceNum;
		this.entranceAppartaments = entranceAppartaments;
	}
	async request() {
		this._response = await fetch(this._url);
		this._data = await this._response.json();
		console.log(this._data);
	}
	getData() {
		this._data.forEach((obj) => {
			console.log(obj);
			if (obj.address == this.targetAddress.value) {
				this.address = obj.address;
				this.entrance = obj.entrances;
				this.entrance.forEach((el, i, arr) => {
					ske = i++;
				});
				console.log(obj.entrance);
				this.entrancesLenght = obj.entrances.length;
			}
		});
	}
	generateTable() {
		const table = document.querySelector("table");
		const tbody = document.querySelector("tbody");
		for (let i = 0; i < this.entrancesLenght; i++) {
			const row = document.createElement("tr");
			for (let j = 0; j < 1; j++) {
				// const cell_1 = document.createElement("td");
				// const cell_1_content = `${ske}`;
				// cell_1.append(cell_1_content);
				const cell_1 = document.createElement("td");
				const cellContent_1 = document.createTextNode(
					`${this.entrance[++ske]}`
				);
				cell_1.appendChild(cellContent_1);
				row.appendChild(cell_1);
				// row.appendChild(cell_2);
			}
			tbody.appendChild(row);
		}
		table.appendChild(tbody);
	}
}
let obj = new addressFinder();
document.addEventListener("DOMContentLoaded", () => {
	obj.request();
});
document.querySelector(".btn").addEventListener("click", () => {
	obj.getData();
	obj.generateTable();
});
