require(["config"], () => {
  require(["template", "header", "footer"], (template) => {
    class Cart {
      constructor() {
        this.init();
        this.getli1();
        this.getli();
        this.hjia();
        this.zj();
        this.yx();
      }

      init() {
        let cart = localStorage.getItem('cart');
        if (cart) {
          // 渲染列表
          cart = JSON.parse(cart);
          this.render(cart);
        } else {
          // 提示购物车为空
          alert('购物车为空，你太穷了');
        }
      }

      render(cart) {
        // template('cart-template', {list: cart})
        $("#list-container").html(template('cart-template', {
          cart
        }));
      }


      //找到所有的li
      //加
      getli() {
        let li = $(".shop-list")
        Array.from(li).forEach(tr => {
          let jia = tr.querySelector(".addNum"),
            id = tr.getAttribute("data-id"),
            inputNum = tr.querySelector(".inputNum")
          jia.onclick = (e) => {
            let cart = localStorage.getItem('cart');
            if (cart) {
              cart = JSON.parse(cart);
              let index = -1;
              if (cart.some((shop, i) => {
                  // some找到满足条件的就不会再继续了
                  // 所以index的值在最后就等于满足条件的索引
                  index = i;
                  return shop.id == id;
                })) {

                console.log(inputNum)
                inputNum.value = Number(inputNum.value) + 1

              }
            }
            this.hjia();
            this.zj();

          }
        })
      }
      //减
      getli1() {
        let li = $(".shop-list")
        Array.from(li).forEach(tr => {
          let jian = tr.querySelector(".reduceNum"),
            id = tr.getAttribute("data-id"),
            inputNum = tr.querySelector(".inputNum")
          jian.onclick = (e) => {
            let cart = localStorage.getItem('cart');
            if (cart) {
              cart = JSON.parse(cart);
              let index = -1;
              if (cart.some((shop, i) => {
                  // some找到满足条件的就不会再继续了
                  // 所以index的值在最后就等于满足条件的索引
                  index = i;
                  return shop.id == id;
                })) {

                console.log(inputNum)
                if (Number(inputNum.value) <=2) {
                  inputNum.value = 1;
                } else {
                  inputNum.value = Number(inputNum.value) - 1

                }
                this.hjia();
                this.zj();


              }
              
            }
          }
        })

      }
      //行价
      hjia() {
        let li = $(".shop-list")
        Array.from(li).forEach(tr => {

          let id = tr.getAttribute("data-id"),
            inputNum = tr.querySelector(".inputNum"),
            dj = tr.querySelector("#dj"),
            xj = tr.querySelector("#xj");


          let cart = localStorage.getItem('cart');
          if (cart) {
            cart = JSON.parse(cart);
            let index = -1;
            if (cart.some((shop, i) => {
                // some找到满足条件的就不会再继续了
                // 所以index的值在最后就等于满足条件的索引
                index = i;
                return shop.id == id;
              })) {
              let hj = Number(inputNum.value) * Number(dj.innerHTML);
              xj.innerHTML = hj;
            }
          }

        })
      }
      //总价
      zj() {
        let li = $(".shop-list");
        let zj = $("#zj");

        let zh = 0;
        Array.from($(".shop-list")).forEach(tr => {
          let dj = tr.querySelector("#xj");
          console.log(dj)
          zh = zh + Number(dj.innerHTML);
        })
        zj.html(zh);
        console.log(zh)
      }
      //总数
      yx() {
        let zs = $("#zs"),
          i = 0;
        let li = $(".shop-list")
        Array.from(li).forEach(tr => {
          i += 1;
        })
        zs.html(i);
      }
      //结算

    }
    new Cart();
  })
})