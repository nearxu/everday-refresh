function timeout(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms,'done')
    })
}
timeout(1000).then(value => {
    console.log(value);
})


let promise = new Promise((resolve,reject) => {
    console.log('pronise')
    resolve();
})

promise.then(() => {
    console.log('resolve')
})

console.log('hi')


function loadImg(url){
    return new Promise((resolve,reject)=>{
        var client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();
        function handler(){
            if(this.readyState !== 4){
                return 
            }
            if(this.status === 200){
                resolve(this.response)
            }else {
                reject(new Error(this.statusText))
            }
        }

        // var image = new Image();
        // image.onload = function() {
        //   resolve(image);
        // };
    
        // image.onerror = function() {
        //   reject(new Error('Could not load image at ' + url));
        // };
    
        // image.src = url;
    })
}
var urls = 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=4204565964,659822548';
loadImg(urls).then((json) => {
    console.log(json)
},err => {
    console.log(err)
})