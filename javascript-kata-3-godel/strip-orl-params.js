function stripUrlParams(url, paramsToStrip = []) {
  let urlParts = url.split("?");
  if (urlParts.length < 2) {
    return url;
  }

  let urlParams = urlParts[1].split("&");
  let filteredUrlParams = [];
  let filteredUrlParamsHelper = [...paramsToStrip];
  for (let i = 0; i < urlParams.length; i++) {
    let paramName = urlParams[i].slice(0, 1);
    if (!filteredUrlParamsHelper.includes(paramName)) {
      filteredUrlParamsHelper.push(paramName);
      filteredUrlParams.push(urlParams[i]);
    }
  }

  return `${urlParts[0]}${filteredUrlParams.length ? "?" : ""}${filteredUrlParams.join("&")}`
}

let url1 = "www.codewars.com?a=1&b=2";
let url2 = "www.codewars.com?a=1&b=2&a=1&b=3";
let url3 = "www.codewars.com?a=1";
let url4 = "www.codewars.com";

console.log(stripUrlParams("www.codewars.com?a=1&b=2&a=1&b=3", ["b"]));
