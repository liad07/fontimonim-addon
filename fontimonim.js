const familyname=[]
for (let i = 1; i < document.getElementById("pa_weight").length; i++) {
    if (document.getElementById("pa_weight")[i].value.split("-")[1]=="family"){

    }
    else
    familyname[i-1]=document.getElementById("pa_weight")[i].value.split("-")[1]

}
document.getElementsByClassName("label")[0].textContent="the weights is:"+familyname
if (familyname.length>1){
    document.getElementsByClassName("label")[1].style.display='none'
}
var name=document.URL;
name=name.replace("https://fontimonim.co.il/font/","")
name=name.replace("/","")
document.getElementById("pa_weight").style.display='none'
document.getElementById("pa_license").style.display='none'
document.getElementsByClassName("single_add_to_cart_button button alt disabled wc-variation-selection-needed")[0].textContent= "הורדה"
document.getElementsByClassName("single_add_to_cart_button button alt disabled wc-variation-selection-needed")[0].className="single_add_to_cart_button button alt"
document.getElementsByClassName("woocommerce-Price-amount amount feat-tnum")[0].textContent="0₪"
document.getElementsByClassName("single_add_to_cart_button button alt")[0].addEventListener("click", download);

console.log(familyname)
function download() {
    for (let i = 0; i < familyname.length; i++) {
        window.open("https://fontimonim.co.il/wp-content/fonts/"+name+"/"+name+"-"+familyname[i]+"-fm.woff2")

    }
    return false;
}
document.getElementsByClassName("woocommerce-error")[0].style.display="none"
