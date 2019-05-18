define(['jquery'], $ => {
    function Header () {
      this.container = $("#header-container");
      this.load().then(()=>{
       this.ju();
      });
      this.sign=$("#Sign-in");
    }
  
    // Object.assign(Header.prototype, {
  
    // });
  
    // 对象合并
    $.extend(Header.prototype, {
      // ES6对象增强写法
      load () {
        // header.html加载到container里
        // this.container.load('/html/module/header.html #header-bottom'); // 选择加载文件中的某一部分
        return new Promise(resolve => {
          this.container.load('/html/module/header.html', () => {
            // load异步执行结束
            resolve();
            
          });
        })
      },
      ju(){
        let cart = localStorage.getItem('cart');
      
       let cart1=JSON.parse(cart)
       // 计算总和的初始值
       var j=0;
       // 循环计算总和相加
        for(var i=1;i<=cart1.length;i++){
          j=i;
        }
        //赋值给购物车
        if(j>100){
          $("#car-num").html("99+");
        }else{
          $("#car-num").html(j);
        }
       
      }
     
    });
  
    return new Header();
  });