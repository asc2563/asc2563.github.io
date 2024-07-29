window.addEventListener("keydown", function
(event) {
    if (event.key === "`") {
        var leave = confirm("press confirm is 1+1 = 2")
        if (leave === true) {
            alert("1+1=3 duh");
        } else {
            alert("ding ding ding")
        }
    } 
}
)

