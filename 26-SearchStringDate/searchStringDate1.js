const searchStringDate = (logs, finit, fend, hinit, hend) => {
  finit = finit.split("/").reverse().join(",");
  fend = fend.split("/").reverse().join(",");
  const dateSearchInit = new Date(`${finit},${hinit}`);
  const dateSearchEnd = new Date(`${fend},${hend}`);
  let count = 0;
  let index = logs.indexOf("/");
  let date = "";
  let time = "";
  while (index > 0) {
    date = logs
      .slice(index - 2, index + 8)
      .split("/")
      .reverse()
      .join(",");
    time = logs.slice(index + 9, index + 17);
    const dateReg = new Date(`${date},${time}`);
    // console.log(dateReg, "menor: ", dateSearchInit, " mayor: ", dateSearchEnd);
    if (dateReg >= dateSearchInit && dateReg <= dateSearchEnd) {
      count = count + 1;
    }
    logs = logs.slice(logs.indexOf("_______") + 7);
    index = logs.indexOf("/");
  }
  return count;
};

//--------------------------------------------------------------------
const registers =
  "200.26.15.64_12/01/1998:16:55:18_http://costumer/rol/12_get:201_______201.66.15.12_10/01/1999:16:55:18_http://costumer/rol/11_get:200_______200.51.15.00_06/06/1980:10:15:08_http://costumer/rol/5_get:500_______200.26.14.112_26/06/1998:12:05:28_http://costumer/rol/1_get:305_______201.216.105.14_23/12/1996:16:55:18_http://costumer/rol/20_get:200_______199.111.115.14_19/11/1995:12:12:59_http://costumer/rol/2_get:401_______200.200.19.123_14/07/1995:20:13:18_http://costumer/rol/13_get:200_______200.26.15.64_12/01/1996:16:55:18_http://costumer/rol/12_get:501_______201.66.15.12_10/01/1997:16:55:18_http://costumer/rol/11_get:500_______200.51.15.00_06/06/1988:19:15:08_http://costumer/rol/5_get:500_______200.26.14.112_26/06/1999:12:35:08_http://costumer/rol/1_get:205_______201.216.105.14_23/12/1995:09:55:18_http://costumer/rol/20_get:200_______199.111.115.14_19/11/1996:11:12:59_http://costumer/rol/2_get:201_______200.200.19.123_14/07/1999:09:13:18_http://costumer/rol/13_get:300_______";
const dateInit = "01/01/1999";
const dateEnd = "31/12/1999";
const hourInit = "00:00:01";
const hourEnd = "23:59:59";
console.log(searchStringDate(registers, dateInit, dateEnd, hourInit, hourEnd));
