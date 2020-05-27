document.addEventListener('DOMContentLoaded', function () {
    let addButton = document.createElement('button');
    let friends = ["John", "Jack", "James", "Joe", "Jarod"];
    addButton.innerHTML = 'Sing';
    addButton.className = 'button';
    document.body.appendChild(addButton);

    addButton.addEventListener('click', function () {
        

        for (i = 0; i < 5; i++) {
            let friendDiv = document.createElement('div');
            let friendH3 = document.createElement('h3');
            friendH3.textContent = friends[i];
            friendDiv.appendChild(friendH3);
            document.body.appendChild(friendDiv);
    
            friendDiv.className = 'friend';
    
            let nameHeader = document.createElement('h3');
            friendDiv.appendChild(nameHeader);
    
            let divClass = document.getElementsByClassName('friend');
            divClass[i].firstChild.textContent = friends[i];
    
            for (j = 99; j > 0; j--) {
                let minusOne = j - 1;
                if (j > 1) {
                    let p = document.createElement('p')
                    friendDiv.appendChild(p)
                    divClass[i].lastChild.textContent += j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] + ' strikes one out, clears it all out, ' + minusOne + ' lines of code in the file ';
                } else {
                    let p = document.createElement('p')
                    friendDiv.appendChild(p)
                    divClass[i].lastChild.textContent += ' 1 line of code in the file, 1 line of code; ' + friends[i] + ' strikes one out, clears it all out, no more lines of code in the file';
                };
            };
        };
    });
});