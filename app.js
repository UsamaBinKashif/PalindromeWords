// let word = prompt('Enter a word');
// let sword = word.split('');
// let rword = sword.reverse( );
// let jword = rword.join('');
// if(word === jword){

//     document.write(word + '<br> <br>' + jword)
// }
// else{
//     document.write('Its not palindrome')
// }
function myFunction() {
    let word = document.getElementById('words').value.toLowerCase();
    let sword = word.split('');
    let rword = sword.reverse();
    let jnword = rword.join('');
    if(word == "" || word == null) {
        document.getElementById('w').innerHTML = ('Please enter some value,Please Reload and Try again!');
     

    } 
    else if(word == jnword) {
        document.getElementById('pw').innerHTML = (word + ' ' + 'is a palindrome' + '<br>' + 'Reload and try again!' );
     
    } 
    else {
        document.getElementById('pww').innerHTML = (word + ' ' + 'is not a palindrome'  + '<br>' + 'Reload and try again!' );
    
    }
}