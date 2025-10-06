export const API_KEY = 'AIzaSyD2aM-ElpuN-tAkK505xKWip7OWRpnAYQI';

export const value_converter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }else if(value>=1000){
        return Math.floor(value/1000)+"k";
    }else{
        return value;
    }
}