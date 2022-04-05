const xhr = new XMLHttpRequest();

xhr.open('POST', '/users');

xhr.setRequestHeader('content-type', 'application/json');

xhr.send(JSON.stringify({id:1, content:'HTML', completed:false}));