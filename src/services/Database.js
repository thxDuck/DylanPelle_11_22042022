

// const DATA_URL = "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json"
import DATAS from "./datas.json"

const APIMock = {
    findAll: (callback) => {
        setTimeout(() => {
            callback(DATAS);
        }, 200);
    },
    findById: (id, callback) => {
        setTimeout(() => {
            let apartment = DATAS.find(d => d.id === id);
            callback(apartment);
        }, 200);

    }

}

const APARTMENTS_BY_PAGES = 6;
const Index = {
    // getApartmentListByPage: async (page = 1) => {
    // FIX GET DATA FROM DATABASE
    // fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json',
    //     { mode: "navigate", headers: { "Access-Control-Allow-Origin": "*", "Access-Control-Request-Method": "GET" } })
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.log(error));


    // const datas = await getDatas();

    // let max = (page) * APARTMENTS_BY_PAGES;
    // let min = max - APARTMENTS_BY_PAGES;
    // console.log('min => ', min, ', Max => ', max);
    // return datas
    // return datas.slice(min, max);

    // const datas = await getDatasFromApi(DATA_URL);
    // console.log('datas => ', datas);
    // },
    getApartmentListByPageAsync: async (page = 1) => {
        // FIX GET DATA FROM DATABASE
        fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
    },
    getApartmentListByPage: (page = 1, callback) => {
        APIMock.findAll(datas => {
            if (!!datas.length) {
                let max = (page) * APARTMENTS_BY_PAGES;
                let min = max - APARTMENTS_BY_PAGES;
                console.log('min => ', min, ', Max => ', max);
                let apartments = datas.slice(min, max);
                callback(apartments);
            }
        });

    },
    getById: (id, callback) => {
        APIMock.findById(id, apartment => {
            callback(apartment);
        });
    },
    getByIdFast: (id) => {
        return DATAS.find(d => d.id === id);
    }
}
export default Index;