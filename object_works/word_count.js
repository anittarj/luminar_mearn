var text="hai hello hai hello"
var words=text.split("")

var word_count={}
for(let key in text){
    if(word in word_count){
        word_count[word]+=1;
    }
    else{
        word_count[word]=1
    }
}
console.log(word_count);