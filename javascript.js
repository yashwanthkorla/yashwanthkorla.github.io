function clicked(){
    console.log('Clicked');
xhr = new XMLHttpRequest();
xhr.onload = function success(){
    console.log(this.responseText);
};
xhr.onerror = function error(){
    console.log(this.responseText);
};
xhr.open('GET','http://numbersapi.com/42');
xhr.send();
}
