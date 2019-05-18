require(["config"],()=>{
    require(["url","template","header","footer"],(url,template)=>{
        class Index{
            constructor(){
             this.getType();
            
            }
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
              let html=template("list-monopoly",{list});
                          $(".xq").html(html);
            }
          }
           new Index();
    })
})