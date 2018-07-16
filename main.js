function encode(str) {
  let alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let encodedStr = "";
  for(let i=0;i<str.length;i++){
    if(str[i].match(/[a-z]/i) ){
      for(let j=0;j<alphabet.length;j++){
        if(str[i] == alphabet[j]){
          encodedStr += alphabet[(j+13)%26]
        }
      }
    }
    else{
      encodedStr += str[i];
    }
  }
  return encodedStr;
}

