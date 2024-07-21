function caesarCipherEncryptor(string, key) {
    let strArr = []
    for(let i = 0; i < string.length; i++) {
      let charCode = (string.charCodeAt(i) - 97 + key) % 26
      strArr.push(String.fromCharCode(charCode + 97))
    }
    return strArr.join('')
  }