const url = require('url');

const testURL = new URL("http://test.com/test.html?id=100&status=active");
//URL is a function in url


//Get url
console.log(testURL.href);
console.log(testURL.toString());

//Host (with port-if there is any)
console.log(testURL.host);

//Host (without port)
console.log(testURL.hostname);

//Pathname
console.log(testURL.pathname);

//Serialized query
console.log(testURL.search);

//Query in dictionary 
console.log(testURL.searchParams);

//Add params to url
console.log(testURL.searchParams.append('abc','123'));
console.log(testURL.searchParams);