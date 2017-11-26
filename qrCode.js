const app = (function () {
    
      /**
       * cache DOM
       */
    
      /**
       * init
       */
    
      _init();
    
      /**
       * functions
       */
    
      function _init() {
        
      }
      
      function recieveOrder(hex) {
        API.checkOrder(hex).then(response => {
            if (response.statusCode == 200) {
                
                alert(response.data.success);
              } else {
                // 彈出錯誤訊息
                alert(response.data.error);
              }
        });
      }
      
    
      return {
        recieveOrder
      }
    
    })();