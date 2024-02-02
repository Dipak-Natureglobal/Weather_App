const apikey = "fbc02f23298c9fbe44785ffb78739796";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const countryDropdown = document.getElementById("countryInput");
const stateDropdown = document.getElementById("stateInput");
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);
    if (response.status == 404) {
       alert("Please provide a correct state name ");
    }
    else {
        var data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        // // document.querySelector(".weather").style.display = "block";
        // document.querySelector(".error").style.display = "none";
    }
}
searchBtn.addEventListener("click", () => {
    var result = stateDropdown.value + "&" + countryDropdown.value;
    // console.log(countryDropdown.value)
    // console.log(stateDropdown.value)
    console.error(result);
    checkweather(result);
})

function searchWeather() {
    const countryInput = document.getElementById('countryInput');
    const countryValue = countryInput.value.trim();
    if (countryValue === "") {
        alert("Please select the country first");
    }
}

function populateStates() {
    var countryInput = document.getElementById("countryInput");
    var stateDropdownContainer = document.getElementById("stateDropdownContainer");
    var states = [];
    if (countryInput.value === "+93") { 
        states = ["select you state...", "Badakhshan", "Badghis", "Baghlan", "Balkh", "Bamyan", "Daykundi", "Farah", "Faryab", "Ghazni", "Ghor", "Helmand", "Herat", "Jowzjan", "Kabul", "Kandahar", "Kapisa", "Khost", "Kunar", "Kunduz", "Laghman", "Logar", "Nangarhar", "Nimruz", "Nuristan", "Paktia", "Paktika", "Panjshir", "Parwan", "Samangan", "Sar-e Pol", "Takhar", "Urozgan", "Wardak", "Zabul"];
    } else if (countryInput.value === "+355") { 
        states = ["select you state...", "Berat", "Dibër", "Durrës", "Elbasan", "Fier", "Gjirokastër", "Korçë", "Kukës", "Lezhë", "Shkodër", "Tiranë", "Vlorë"];
    } else if (countryInput.value === "+213") { 
        states = ["select you state...", "Adrar", "Chlef", "Laghouat", "Ouargla", "Batna", "Biskra", "Béjaïa", "Bordj Bou Arréridj", "Boumerdès", "Tizi Ouzou", "Tlemcen", "Tiaret", "Tébessa"];
    } else if (countryInput.value === "+376") { 
        states = ["select you state...", "Andorra la Vella", "Canillo", "Encamp", "Escaldes-Engordany", "La Massana", "Ordino", "Sant Julià de Lòria"];
    } else if (countryInput.value === "+244") { 
        states = ["select you state...", "Bengo", "Benguela", "Bié", "Cabinda", "Cunene", "Huambo", "Huíla", "Luanda", "Lunda Norte", "Lunda Sul", "Malanje", "Moxico", "Namibe", "Uíge", "Zaire"];
    } else if (countryInput.value === "+54") { 
        states = ["select you state...", "Buenos Aires", "Catamarca", "Chaco", "Chubut", "Córdoba", "Corrientes", "Entre Ríos", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquén", "Río Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucumán"];
    } else if (countryInput.value === "+374") { 
        states = ["select you state...", "Aragatsotn", "Ararat", "Armavir", "Gegharkunik", "Kotayk", "Lori", "Shirak", "Syunik", "Tavush", "Vayots Dzor", "Yerevan"];
    } else if (countryInput.value === "+61") { 
        states = ["select you state...", "Australian Capital Territory (ACT)", "New South Wales (NSW)", "Northern Territory (NT)", "Queensland (QLD)", "South Australia (SA)", "Tasmania (TAS)", "Victoria (VIC)", "Western Australia (WA)"];
    } else if (countryInput.value === "+43") { 
        states = ["select you state...", "Burgenland", "Carinthia", "Lower Austria", "Upper Austria", "Salzburg", "Styria", "Tyrol", "Vorarlberg", "Vienna"];
    } else if (countryInput.value === "+994") { 
        states = ["select you state...", "Absheron", "Ganja-Gazakh", "Guba-Khachmaz", "Lankaran", "Shaki-Zagatala", "Upper Karabakh", "Kalbajar-Lachin", "Nakhchivan"];
    } else if (countryInput.value === "+880") { 
        states = ["select you state...", "Barisal", "Chittagong", "Dhaka", "Khulna", "Rajshahi", "Rangpur", "Sylhet"];
    } else if (countryInput.value === "+375") { 
        states = ["select you state...", "Brest", "Gomel", "Grodno", "Minsk", "Mogilev", "Vitebsk"];
    } else if (countryInput.value === "+32") { 
        states = ["select you state...", "Brussels Capital Region", "Flemish Region", "Walloon Region"];
    } else if (countryInput.value === "+55") { 
        states = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Espírito Santo", "Federal District", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];
    } else if (countryInput.value === "+359") { 
        states = ["select you state...", "Blagoevgrad", "Burgas", "Dobrich", "Gabrovo", "Haskovo", "Kardzhali", "Kyustendil", "Lovech", "Montana", "Pazardzhik", "Pernik", "Pleven", "Plovdiv", "Razgrad", "Ruse", "Shumen", "Silistra", "Sliven", "Smolyan", "Sofia City Province", "Sofia Province", "Stara Zagora", "Targovishte", "Varna", "Veliko Tarnovo", "Vidin", "Vratsa", "Yambol"];
    } else if (countryInput.value === "+1") {
        states = ["select you state...", "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"];
    } else if (countryInput.value === "+86") { 
        states = ["select you state...", "Anhui", "Fujian", "Gansu", "Guangdong", "Guizhou", "Hainan", "Hebei", "Heilongjiang", "Henan"];
    } else if (countryInput.value === "+57") { 
        states = ["select you state...", "Amazonas", "Antioquia", "Arauca", "Atlántico", "Bolívar", "Boyacá", "Caldas", "Caquetá", "Casanare", "Cauca", "Cesar", "Chocó", "Córdoba", "Cundinamarca", "Guainía", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Nariño", "Norte de Santander", "Putumayo", "Quindío", "Risaralda", "San Andrés and Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupés", "Vichada"];
    } else if (countryInput.value === "+20") { 
        states = ["select you state...", "Alexandria", "Aswan", "Asyut", "Beheira", "Beni Suef", "Cairo", "Dakahlia", "Damietta", "Faiyum", "Gharbia", "Giza", "Ismailia", "Kafr El Sheikh", "Luxor", "Matrouh", "Minya", "Monufia", "New Valley", "North Sinai", "Port Said", "Qalyubia", "Qena", "Red Sea", "Sharqia", "Sohag", "South Sinai", "Suez"];
    } else if (countryInput.value === "+33") { 
        states = ["select you state...", "Auvergne-Rhône-Alpes", "Bourgogne-Franche-Comté", "Brittany", "Centre-Val de Loire", "Corsica", "Grand Est", "Hauts-de-France", "Île-de-France", "Normandy", "Nouvelle-Aquitaine", "Occitanie", "Pays de la Loire", "Provence-Alpes-Côte d'Azur"];
    } else if (countryInput.value === "+49") { 
        states = ["select you state...", "Baden-Württemberg", "Bavaria", "Berlin", "Brandenburg", "Bremen", "Hamburg", "Hesse", "Lower Saxony", "Mecklenburg-Vorpommern", "North Rhine-Westphalia", "Rhineland-Palatinate", "Saarland", "Saxony", "Saxony-Anhalt", "Schleswig-Holstein", "Thuringia"];
    } else if (countryInput.value === "+91") { 
        states = ["select you state...", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"];
    } else if (countryInput.value === "+62") { 
        states = ["select you state...", "Aceh", "Bali", "Bangka Belitung", "Banten", "Bengkulu", "Central Java", "Central Kalimantan", "Central Sulawesi", "East Java", "East Kalimantan", "East Nusa Tenggara", "Gorontalo", "Jambi", "Lampung", "Maluku", "North Kalimantan", "North Maluku", "North Sulawesi", "North Sumatra", "Papua", "Riau", "Riau Islands", "South Kalimantan", "South Sulawesi", "South Sumatra", "Southeast Sulawesi", "West Java", "West Kalimantan", "West Nusa Tenggara", "West Papua", "West Sulawesi", "West Sumatra", "Yogyakarta"];
    } else if (countryInput.value === "+39") { 
        states = ["select you state...", "Abruzzo", "Aosta Valley", "Apulia", "Basilicata", "Calabria", "Campania", "Emilia-Romagna", "Friuli Venezia Giulia", "Lazio", "Liguria", "Lombardy", "Marche", "Molise", "Piedmont", "Sardinia", "Sicily", "Trentino", "Tuscany", "Umbria", "Veneto"];
    } else if (countryInput.value === "+81") { 
        states = ["select you state...", "Aichi", "Akita", "Aomori", "Chiba", "Ehime", "Fukui", "Fukuoka", "Fukushima", "Gifu", "Gunma", "Hiroshima", "Hokkaido", "Hyogo", "Ibaraki", "Ishikawa", "Iwate", "Kagawa", "Kagoshima", "Kanagawa", "Kochi", "Kumamoto", "Kyoto", "Mie", "Miyagi", "Miyazaki", "Nagano", "Nagasaki", "Nara", "Niigata", "Oita", "Okayama", "Okinawa", "Osaka", "Saga", "Saitama", "Shiga", "Shimane", "Shizuoka", "Tochigi", "Tokushima", "Tokyo", "Tottori", "Toyama", "Wakayama", "Yamagata", "Yamaguchi", "Yamanashi"];
    } else if (countryInput.value === "+52") { 
        states = ["select you state...", "Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila", "Colima", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico City", "Mexico State", "Michoacán", "Morelos", "Nayarit", "Nuevo León", "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz", "Yucatán", "Zacatecas"];
    } else if (countryInput.value === "+7") { 
        states = ["select you state...", "Amur", "Arkhangelsk", "Astrakhan", "Belgorod", "Bryansk", "Chelyabinsk", "Chukotka", "Chuvashia", "Crimea", "Dagestan", "Ingushetia", "Irkutsk", "Ivanovo", "Jewish Autonomous Oblast", "Kabardino-Balkaria", "Kaliningrad", "Kalmykia", "Kaluga", "Kamchatka", "Karachay-Cherkessia", "Karelia", "Kemerovo", "Khabarovsk", "Khakassia", "Khanty-Mansi", "Kirov", "Komi", "Kostroma", "Krasnodar", "Krasnoyarsk", "Kurgan", "Kursk", "Leningrad", "Lipetsk", "Magadan", "Mari El", "Mordovia", "Moscow", "Murmansk", "Nenets", "Nizhny Novgorod", "North Ossetia", "Novgorod", "Novosibirsk", "Omsk", "Orenburg", "Oryol", "Penza", "Perm", "Primorsky", "Pskov", "Rostov", "Ryazan", "Sakha", "Sakhalin", "Samara", "Saratov", "Smolensk", "Stavropol", "Sverdlovsk", "Tambov", "Tatarstan", "Tomsk", "Tula", "Tver", "Tyumen", "Udmurtia", "Ulyanovsk", "Vladimir", "Volgograd", "Vologda", "Voronezh", "Yamalo-Nenets", "Yaroslavl"];
    } else if (countryInput.value === "+27") { 
        states = ["select you state...", "Eastern Cape", "Free State", "Gauteng", "KwaZulu-Natal", "Limpopo", "Mpumalanga", "North West", "Northern Cape", "Western Cape"];
    }
    var stateInput = document.getElementById("stateInput");
    stateInput.innerHTML = ""; 
    for (var i = 0; i < states.length; i++) {
        var option = document.createElement("option");
        option.value = states[i].toLowerCase(); 
        option.text = states[i];
        stateInput.add(option);
    }

    stateDropdownContainer.style.display = "block"; // Show state dropdown
}
