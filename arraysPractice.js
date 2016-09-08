//Once you complete a problem, open up Chrome and check the answer in the console.


var arr = [10, 20, 30];
//Create a function named 'first' that is given 'arr' as the argument and  returns the first item in the given array.

//Code Here
function first(arr) {
    return arr[0];
    //or return arr.shift(); 
}


//Next problem



var arr = [40, 50, 60];
//Create a function named 'last' that is given 'arr' as the argument and returns the last item in the given array.
function last(arr) {
    return arr[2]; //GG: This one works given that the array has exactly 3 items (index 2 would be the third position, 0, 1, 2) but will not work for an array of any other length.
    //or return.pop(); //GG: This one works.
    //or return arr[arr.length - 1]; //GG: So does this one.
}

//Code Here


//Next Problem


var family = ['Tyler', 'Jordyn', 'Ryan', 'Chelsey', 'Ireland'];
//Create a function named 'looper' that is given family as it's only argument, loops through the given array, and alerts every item in the array.

//Code Here
function looper(arr) {
    for (var i = 0; i < arr.length; i++) {
        alert(arr[i]);
    }
}

//or//

function looperForEach(arr) {
    arr.forEach(function(item) {
        alert(item);
    });
}

//Next problem



var letters = ['A', 'B', 'C', 'D', 'E'];
//Write a function called reversedLooper that is given letters as it's only argument and loops through the given array backwards alerting every item in the array starting at the end.

//Code Here
function reversedLooper(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}

//or//

function reversedLooperForEach(arr) {
    arr
        .reverse()
        .forEach(function(item) {
            alert(item);
        });
    arr.reverse();
}

//Next Problem


var nums = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];
//Write a function named evenFinder that is given nums as it's only argument and removes all values that aren't even from the given array. So, remove the odd numbers.

//Code Here
function evenFinder(arr) {
    var newArray = [];
    arr.forEach(function(item) {
        if (item % 2 === 0) {
            newArray.push(item);
        }
    });

    return newArray;

}
//GG: Another way we could do this is with .filter() to filter out the odd values.

//Next problem


var numbersArray = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
//Write a function called divider that is given one argument, numbersArray.
//Have divider return an Array with the first item in the array being the evens array (all the even values from nums) and the second item in the Array being the odds array(all the odd values from nums).



//Code Here
function divider(arr) {
    var newArray = [
        [],
        []
    ]; //2 arrays in an array as indexes

    arr.forEach(function(item) {
        if (item % 2 === 0) {
            newArray[0].push(item);
        } else {
            newArray[1].push(item);
        }
    });

    return newArray;

}

//Next Problem


var getRandomArbitrary = function() {
    return Math.floor(Math.random() * (30 - 0) + 0);
};
// var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//Above you're given a function that will return a random number between 0 and 30.  There is also a commented out array full of numbers to help you visualize what your function will be receiving.

// Your job is to write a function named finder that will get a random number (by invoking getRandomArbitrary), then loop through the array (that will be passed in as a parameter) to see if that random number is in the array. If it is, return true, if it's not, return false

//Code Here
function finder(arr) {

    var random = getRandomArbitrary();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === random) {
            return true;
        }
    }

    return false;
}
//or//

// arr.forEach(function(item) {
//     if (item === random) {
//         return true;
//     }
// });

//Next problem



var str = 'this is my sentence';
//Write a function called reverse that takes a given str as it's only argument and returns that string after it's been reversed

//Code Here
function reverse(str) {
    return str.split('').reverse('').join('');
}

//or//

// function reverse(str) {
//   for(var i = 0; i >= str.length; i--){
//     revString += str[i];
//   }
//   return revString;
// }

//Next Problem



/*
  Here we're going to write a function that mimics going shopping and checking things off of our grocery list,
  and adding new items to our list.

  Write a function called removeItem that is given two arguments, the first is myGroceryList, and the
  second is an item to remove from myGroceryList. If the second argument (or the item to add or remove) matches an item in myGroceryList,
  remove that item from the your grocery list and return the new, updated grocery list.

  Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList
  and the second is an item to add to your grocery list. In addItem add the item you passed in to
  myGroceryList then return the new, updated grocery list.

  In both the removeItem function and the addItem function, you will also need to check for valid aurguments. Specrunner will try to call your functions without passing in valid aurguments. When this happens, you will need to respond by returning an empty array.
*/

//Code Here
var myGroceryList = ['chips', 'pizza', 'hotpockets', 'MtnDew', 'corndogs'];

function removeItem(myGroceryList, removedItem) {
    if (!myGroceryList) {
        return [];
    }
    //GG: A trick we can do here to simplify is to write:
    //GG:  myGroceryList = myGroceryList || []; 
    //GG: This basically juset set myGroceryList to myGroceryList if myGroceryList is truthy, if it isn't then it set it to an empty array.
    
    myGroceryList.forEach(function(item, index) {
        if (item === removedItem) {
            myGroceryList.splice(index, 1);
        }
    });
    return myGroceryList;
}

////GO THROUGH THE LOGIC HERE/////
function addItem(myGroceryList, addedItem) {
    if (!myGroceryList) {
        return [];
    }

    var presentItem = false;
    myGroceryList.forEach(function(item, index) {
        if (item === addedItem) {
            presentItem = true;
        }
    });
    if (!presentItem) {
        myGroceryList.push(addedItem);
    }
    return myGroceryList;
}
//removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];



//Next Problem



//Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.

//Code Here
function maker() {
    var myArr = [];
    for (var i = 1; i <= 215; i++) {
        myArr.push(i);
    }
    return myArr;
}

//Next Problem


var numbers = [5, '9', 16, 19, '25', '34', 48];
//Write a function called addTen that is given 'numbers' as it's only argument and returns a new
//array after adding ten to each item in numbers. *Verify your answer is correct. --> [15, 19, 26, 29, 35, 44, 58]

//Code Here
function addTen(arr) {
    return arr.map(function(item) {
        return parseInt(item) + 10;
    });
}
//GG: .map() is super handy huh?

//Next Problem



var num1 = Math.floor(Math.random() * (30 - 0) + 0);
var num2 = Math.floor(Math.random() * (30 - 0) + 0);
var arr1 = [];
var arr2 = [];
for (var i = 0; i < num1; i++) {
    arr1.push(i);
}
for (var i = 0; i < num2; i++) {
    arr2.push(i);
}
//Above is some code that adds a random number of values to both arr1 and arr2.
//Write a function called 'longer' that is given arr1 and arr2 as it's only arguments. Return the array which is longest.

//Code Here
function longer(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return arr1;
    }
    return arr2;
}

/*As a continuation of the previous problem, write another function called 'both'.
  Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).
  'both' should return a new array with the matching numbers found in both arr1 and arr2.
  Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
*/

//Code Here

function both(arr1, arr2) {
    var newArray = [];
    for (var i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) > -1) {
            newArray.push(arr1[i]);
        }
    }
    return newArray;
}
//GG: This is a really clever way of accomplishing this! My solution was to just use nested for loops but this is way more elegant. Nice job!


//or//


// function both(arr1, arr2){
//   var newArray = [];
//   for ( var i = 0; i < arr1.length; i++ ) {
//         for ( var e = 0; e < arr2.length; e++ ) {
//             if ( arr1[i] === arr2[e] ) newArray.push( arr1[i] );
//         }
//     }
//     return newArray;
// }


//NEXT PROBLEM


var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
};

/*Above you're given an empty array with four objects. Fill the devMountainEmployees
array with those four objects. After that console.log the length of the Array and make
sure that it's equal to 4. */

//Code Here
  devMountainEmployees.push(tyler, cahlan, ryan, colt);
    console.log(devMountainEmployees.length);


/*Now let's say Cahlan has a mental breakdown and has to take a leave of absence to 'find himself'.
Loop through your devMountainEmployees until you find cahlan, then remove him from the array.*/

//Code Here
for(var i = 0; i < devMountainEmployees.length; i++) {
    var cahlan = devMountainEmployees[i]; //GG: You are changing the value of 'cahlan' every time your loop iterates.

    if(userToDelete.indexOf('Cahlan'.name) !== -1) { //GG: Doesn't look like you have'userToDelete' defined which would break this.
        devMountainEmployees.splice(i, 1);
        i--;
    }
}

//GG: Simpliest solution here in my mind would be to just loop over the array and check the current item against the name we want to delete.
//GG: If it's found, then splice it. 
//GG:
/*
    devMountainEmployees.forEach(function(item, index){
        if(item.name === 'Cahlan'){
            devMountainEmployees.splice(index, 1);
        }
    });
*/





//NEXT PROBLEM




/*Now we're going to combine what we've learned today (objects) with what we learned
yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
Let's think back to our itunes example (tylermcginnis.com/itunes).
Notice that when you type in an artist name, iTunes gives us back a LOT of data.
What they're really giving us is an Array full of Objects. It probably looks something
like this. */

var data = [{
    artist: 'shakira',
    album: 'hips don\'t lie',
    tracks: 16
}, {
    artist: 'shakira',
    album: 'mariposa',
    tracks: 12
}, {
    artist: 'shakira',
    album: 'greatest hits',
    tracks: 19
}];



/*A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
of Data is to have an Array full of objects. */

//Create an empty array called users.

//Code Here
var users = [];
/*Now add three user objects to your users array. Each user object should contain the
following properties. name, email, password, username.*/

//include this as one of the objects in your array.
var users = [
user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
},

//Your Code Here
user2 = {
  name: 'talon',
  email: 'talon@test.com',
  password: 'test1234',
  username: 'tdog',
},

user3 = {
  name: 'lauren',
  email: 'lauren@test.com',
  password: 'admin1234',
  username: 'ldoggy',
}
];


/*Now you have a very common data structure. Twitter is a good use case.
It's easy to imagine that your followers list on Twitter is an Array full or objects
and those objects contain properties about the specific person you follow.*/

/*Now let's say that Tyler decided to delete his account. Loop through your array of
objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
Once you find the particular index he's located in, delete him from the array.*/

//Code Here
function deleteUser(email) { //GG: maybe consider taking in two parameters... the array you want to loop over and then the item you want to search for.
  for(var i = 0; i < users.length; i++) {
     if(users[i].email === 'tylermcginnis33@gmail.com') {
       users.splice(i, 1);
       return users; //We want to make sure we return our array OUTSIDE of our for loop. Otherwise our for loop will only run 1 time and then exit because when we RETURN it exits the function.
     }
  }
}

//GG: So this totally works, however your email parameter you have is not being utilized. You could remove it, or better yet write your function to ulitize it (and maybe add an array parameter as well).
//GG: So that would look like:
//GG:
/*
    functiondeleteUser(array, email){
        for(var i = 0; i < array.length; i++){
            if(array[i].email === email){
                array.splice(i, 1);
            }
        }
        return array;
    }
*/


//The activity we just did is very much how data works in 'the real world'.
