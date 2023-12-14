export default class DataService {

    static loadData(dataName, defaultData) {
        const jsonData = sessionStorage.getItem(dataName);
        if (jsonData) {
            const data = JSON.parse(jsonData);
            return data;
        }
        return defaultData;
    }

    static saveData(dataName, data) {
        const jsonData = JSON.stringify(data);
        sessionStorage.setItem(dataName, jsonData);
    }

    static removeData(dataName){
        if (sessionStorage.getItem(dataName)){
            sessionStorage.removeItem(dataName);
        }
    }
}