//Arrays

var iceCream = ["Stracciatella", "Cookies and Cream", "Chocolate"]

iceCream.push("Mint Chocolate Chip");

//Objects
var presidents = [
    {
      firstName: "Donald",
      lastName: "Trump",
      termLength: "1",
      party: "Republican",
      yearsOfPresidency: "2017-present"
    },

    {
      firstName: "Barack",
      lastName: "Obama",
      termLength: "2",
      party: "Democrat",
      yearsOfPresidency: "2009-2017"
    },

    {
      firstName: "George W.",
      lastName: "Bush",
      termLength: "2",
      party: "Republican",
      yearsOfPresidency: "2001-2009"
    },

    {
      firstName: "Bill",
      lastName: "Clinton",
      termLength: "2",
      party: "Democrat",
      yearsOfPresidency: "1993-2001"
    },

    {
      firstName: "George H.W.",
      lastName: "Bush",
      termLength: "1",
      party: "Republican",
      yearsOfPresidency: "1989-1993"
    }
];

console.log(presidents[2].firstName + " " + presidents[2].lastName);
