var weather_data = [
    { district: "tvm", temp: 30 },
    { district: "tvm", temp: 29 },
    { district: "apy", temp: 24 },
    { district: "ktm", temp: 20 },
    { district: "idk", temp: 19 },
    { district: "ekm", temp: 31 },
    { district: "tsr", temp: 29 },
    { district: "mpm", temp: 30 },
    { district: "apy", temp: 25 },
    { district: "ktm", temp: 21 },
    { district: "idk", temp: 18 },
    { district: "ekm", temp: 30 },
    { district: "tsr", temp: 20 },
    { district: "mpm", temp: 31 },

]

// print the each district along with their maximum temperature
var forecaste = []
for (let data of weather_data) {
    let district_name = data.district
    let current_temp = data.temp
    if (district_name in forecaste) {
        let old_temp = forecaste[district_name]
        if (current_temp > old_temp) {
            forecaste[district_name] = current_temp
        }
    }
    else {
        forecaste[district_name] = current_temp

    }
}
console.log(forecaste);

// sort the forecaste wrt to temperature
console.log(Object.entries(forecaste).sort((data1, data2) => data1[1] - data2[1]))

