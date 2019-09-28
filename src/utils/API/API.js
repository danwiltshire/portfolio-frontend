const API = {
  fetchData: function(endpoint) {
    return fetch('https://895o1wozfh.execute-api.eu-west-2.amazonaws.com/prod/' + endpoint)
  }
}

export default API