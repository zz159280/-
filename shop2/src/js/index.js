require(["config"], () => {
    //引入要用的模块
    require(["url","template","swiper","header","footer"], (url,template,Swiper) => {
      class Index{
        constructor(){
         this.getType();
         this. banner () ;
        }

        banner () {
          // 首页轮播图
          var mySwiper = new Swiper ('.swiper-container', {
            autoplay: true,
            
            loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },
            
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
              
            }
  
          }) 
        }
        //
        getType(){
          $.get(url.rapBaseUrl+"index/type", data=>{
            if(data.res_code===1){
              //console.log(data);
             this.renderType(data.res_body.list);
            }
          })
        }
        renderType(list){
          console.log(template)
          console.log(list);
          //渲染到页面
          let html=template("list-monopoly",{list});
                      $(".fzlb").html(html);
                      $(".mrlb").html(html);
                      $(".smlb").html(html);
                      $(".rylb").html(html);
          
        }
      }
       new Index();
    })
  })
 