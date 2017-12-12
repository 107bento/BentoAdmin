const app = (function () {
    
      /**
       * cache DOM
       */
    
      let $detailsBody = $('#detailsBody');
      let $orderID = $('#orderID');
      let $receiveBtn = $('#receiveBtn');
      /**
       * init
       */
    
      _init();
    
      /**
       * functions
       */
    
      function _init() {
        
      }
      
      function getOrder(hex) {
        API.getOrder(hex).then(response => {
            if (response.statusCode == 200) {
                alert('GET!');
                console.log(response.data);
                $receiveBtn.prop('hidden', false);
                _renderData(response.data);
              } else {
                // 彈出錯誤訊息
                alert(response.data.error);
              }
        });
      }

      function _renderData(data) {
        $orderID.val(data.order_id);
        let html = ``;
        for (let detail of data.details) {
          html += `<tr><td>${detail.detail_id}</td><td>${detail.meal.shop_name}</td><td>${detail.meal.meal_name}</</td><td>${detail.amount}</td>`
        }
        $detailsBody.html(html);
      }

      function receiveOrder() {
        alert('領餐成功！');
        $receiveBtn.prop('disabled', true);
      }

      return {
        getOrder,
        receiveOrder
      }
    
    })();