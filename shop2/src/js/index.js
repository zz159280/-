require(["config"], () => {
    //引入要用的模块
    require(["url","template","swiper","header","footer"], (url,template,Swiper) => {
      class Index{
        constructor(){
         this.getType();
         this. banner () ;
        }

        banner(){
          var mySwiper = new Swiper ('.swiper-container', {
              direction: 'horizontal', // 水平切换选项
              loop: true, // 循环模式选项
              autoplay:true,
              
              // 如果需要分页器
              pagination: {
                el: '.swiper-pagination',
              }
          }) 
          //鼠标覆盖停止自动切换
          mySwiper.el.onmouseover = function(){
              mySwiper.autoplay.stop();
          }
          mySwiper.el.onmouseleave = function(){
              mySwiper.autoplay.start();
          }
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
 