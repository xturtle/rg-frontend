import Cookies from 'universal-cookie';

var ajax = {
  generic: async function(url, method="GET", payload=null, auth=false) {
    let cookies = new Cookies();
    if (method === "GET") payload = null;   // only POST, PUT allows payload exists
    else payload = JSON.stringify(payload); // json2string

    var headers = {
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      "credentials": 'include'
    };
    
    if (auth === true)    //add bearer from cookies
      headers['Authorization'] = cookies.get('token');

    const settings = {
      method: method,        
      headers: headers
    };
    
    if (payload !== null) //add payload
      settings.body = payload;

    try {
      const fetchResponse = await fetch(url, settings);
      const data = await fetchResponse.json();
      if (data.code === "101")
        window.location.href = '/login'; //relative to domain
      return data;
    } catch (e) {
      return e;
    }
  },
  multipart: async function(url, payload, auth=false) {
    let cookies = new Cookies();
    var headers = {        
      "credentials": 'include'
    };

    const settings = {
      method: 'POST',
      headers: headers,
      body: payload        
    }
    
    if (auth === true)    //add bearer from cookies
      headers['Authorization'] = cookies.get('token');

    try {
      const fetchResponse = await fetch(url, settings);
      const data = await fetchResponse.json();
      if (data.code === "101")
        window.location.href = '/login'; //relative to domain
      return data;
    } catch (e) {
      return e
    }
  }
}

export default ajax;