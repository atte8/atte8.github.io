let tg = window.Telegram.WebApp;
console.log("JS файл успешно подключен.");
tg.expand()

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("Btn1")
let btn2 = document.getElementById("Btn2")
let btn3 = document.getElementById("Btn3")
let btn4 = document.getElementById("Btn4")
let btn5 = document.getElementById("Btn5")
let btn6 = document.getElementById("Btn6")

btn1.addEventListener("click",function()
{
 if (tg.MainButton.isVisible)
  {
   tg.MainButton.hide();
  }
  else
  {
   item = "1"
   tg.MainButton.show();
   console.log("Кнопка 1 нажата");
  }
});


btn2.addEventListener("click",function()
{
 if (tg.MainButton.isVisible)
  {
   tg.MainButton.hide();
  }
  else
  {
   item = "2"
   tg.MainButton.show();
  }
});

btn3.addEventListener("click",function()
{
 if (tg.MainButton.isVisible)
  {
   tg.MainButton.hide();
  }
  else
  {
   item = "3"
   tg.MainButton.show();
  }
});

btn3.addEventListener("click",function()
{
 if (tg.MainButton.isVisible)
  {
   tg.MainButton.hide();
  }
  else
  {
   item = "3"
   tg.MainButton.show();
  }
});

Telegram.WebApp.onEvent("mainButtonClicked",function(){
 tg.sendData(item);
})
