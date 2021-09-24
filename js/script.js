$(".agregar").on("click",function(e){
    e.preventDefault()
    var item = $("#newText").val()
    var listaItems = $("ul")
    var newItem = `<div class="lis"> 
                        <p class="itemShop"> ${item} </p>
                        <button class="checar">check</button>
                        <button class="del">delete</button> 
                    </div>`
    listaItems.append(newItem)
})

$(".Lista").on("click",".checar",function(){
    $(this).prev().toggleClass("chec")
})

$(".Lista").on("click",".del",function(){
    $(this).parent().remove()
})
