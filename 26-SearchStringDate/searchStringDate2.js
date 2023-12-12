const fs = require("fs");

const searchStringDate = (data) => {
  data = data.split("\n");
  let range = data.pop();
  let n = parseInt(data.shift());
  if (n === data.length) {
    // console.log(n, range);
    let finit = range.slice(0, 10);
    let hinit = range.slice(11, 19);
    let fend = range.slice(20, 30);
    let hend = range.slice(31, 39);
    // console.log(finit);
    // console.log(hinit);
    // console.log(fend);
    // console.log(hend);
    finit = finit.split("/").reverse().join(",");
    fend = fend.split("/").reverse().join(",");
    const dateSearchInit = new Date(`${finit},${hinit}`);
    const dateSearchEnd = new Date(`${fend},${hend}`);
    let count = 0;
    let index = 0;
    let date = "";
    let time = "";
    for (let i = 0; i < n; i++) {
      index = data[i].indexOf("/");
      date = data[i]
        .slice(index - 2, index + 8)
        .split("/")
        .reverse()
        .join(",");
      time = data[i].slice(index + 9, index + 17);
      const dateReg = new Date(`${date},${time}`);
      if (dateReg >= dateSearchInit && dateReg <= dateSearchEnd) {
        count += 1;
      }
    }
    return (
      "El número de registros entre el " +
      dateSearchInit.toLocaleDateString() +
      " y " +
      dateSearchEnd.toLocaleDateString() +
      " son: " +
      count
    );
  } else {
    return "El archivo no es consistente";
  }
};

//--------------------------------------------------------------------
try {
  let archivo = fs.readFileSync(__dirname + "/dates.txt", "utf-8");
  console.log(searchStringDate(archivo));
} catch (error) {
  console.log("Error con archivo", error);
}
