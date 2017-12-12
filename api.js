const API = (function () {
    const baseUrl = env.baseUrl;
  
    // 審核單位登入
    function login(username, password) {
      const data = {username, password};
  
      const request = fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
      });
  
      return _requestHandle(request);
    }
  
    // 工讀生拿訂單
    function getOrder(hex) {
      const data = {"hex": hex};
      const request = fetch(`${baseUrl}/orders/admin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(data)
      });
  
      return _requestHandle(request);
    }

    // http request 的中介處理
    function _requestHandle(request) {
      return request.then(fetchResponse => {
        return fetchResponse.json().then(data => {
          return {
            ok: fetchResponse.ok,
            data,
            statusCode: fetchResponse.status
          };
        }).then(response => {
          // 錯誤時的處理
  
          // 沒錯閃邊去
          if (response.ok) {
            return response;
          }
  
          // 設定兩種錯誤類型（單行 string 跟原始 string array）
        //   response.singleErrorMessage = response.data.messages.join(',');
        //   response.errorMessages = response.data.messages;
  
          return response;
        });
      })
    }
  
    return {
      login,
      getOrder
    }
  })();
  