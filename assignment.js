//https://github.com/shahidaac/assignment3-m3-nehal

//kilometerToMeter
function kilometerToMeter(yourData) {
  if (yourData <= -1) {
    return "!WARNING! Invalid input!Try again.Thanks";
  } else {
    let kmToMeter = yourData * 1000;
    return kmToMeter;
  }
}
//testing the function:kilometerToMeter
//console.log(kilometerToMeter(2));

//budgetCalculator
function budgetCalculator(noOfWatch, noOfMobile, noOfLaptop) {
  if (noOfWatch < 0 || noOfMobile < 0 || noOfLaptop < 0) {
    return "!WARNING! Invalid input!Try again.Thanks";
  } else {
    //calculation of total watch
    let priceOfWatch = noOfWatch * 50;
    //calculation of total mobile
    let priceOfMobile = noOfMobile * 100;
    //calculation of total laptop
    let priceOfLaptop = noOfLaptop * 500;
    //total produc costs
    let totalAmount = priceOfWatch + priceOfMobile + priceOfLaptop;
    return totalAmount;
  }
}
//testing the function:budgetCalculator
//console.log(budgetCalculator(1, 2, 3));

//hotelCost
function hotelCost(dayPassed) {
  if (dayPassed <= 0) {
    return "!WARNING! Invalid input!Try again.Thanks";
  } else {
    function stayedDay() {
      //first 10 days cost
      if (dayPassed > 0 && dayPassed <= 10) {
        let costIs = dayPassed * 100;
        return costIs;
      } // 20 days cost
      else if (dayPassed >= 11 && dayPassed <= 20) {
        let costOfTenDaysPlus = (dayPassed - 10) * 80 + 1000;
        return costOfTenDaysPlus;
      }
      //extended staying cost
      else if (dayPassed >= 21) {
        let costOfTwentyDaysPlus = (dayPassed - 20) * 50 + 1800;
        return costOfTwentyDaysPlus;
      } else {
        console.log("Invalid input.Please try again!");
      }
    }
    return stayedDay();
  }
}
//testing the function:hotelCost
//console.log(hotelCost(6));

//megaFriend
function megaFriend(friendsName) {
  let namesOfFriend = " ";
  //cataching friend's name indiviudally
  friendsName.forEach(function (singleName) {
    if (singleName.length > namesOfFriend.length) {
      namesOfFriend = singleName;
    }
  });
  return namesOfFriend;
}
//testing the function:megaFriend
/*
console.log(
  megaFriend([
    "Cristiano Ronaldo",
    "Bjarne Stroustrup",
    "Anders Hejlsberg",
    "Linus Torvalds",
    "Ken Thompson",
  ])
);
*/
