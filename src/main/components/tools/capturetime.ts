interface captureTimeOption {
getProcessedTime: ()=>string;
getCurrentTime: ()=>string;
}
export default function():captureTimeOption{
const timecache = (new Date()).toString();
const exportsas = {
getProcessedTime: function(){
    const currenttime = (new Date()).toString();
    const timenow = Number(timecache)-Number(currenttime);
    return String(timenow);
},
getCurrentTime: function(){
    const currenttime = (new Date()).toString();
    return currenttime;
}
};
return exportsas;
}