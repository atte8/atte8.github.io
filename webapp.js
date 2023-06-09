let tg = window.Telegram.WebApp;

tg.expand()

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

let item = "";

let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")

btn1.addEventListener("click",function(){
 if (tg.MainButton.isVisible)
  {
   tg.MainButton.hide();
  }
  else
  {
   tg.MainButton.setText("товар1!");
   item = "1"
   tg.MainButton.show();
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
   tg.MainButton.setText("товар2!");
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
   tg.MainButton.setText("товар3!");
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
   item = "4"
   tg.MainButton.setText("товар4!");
   tg.MainButton.show();
  }
});

Telegram.WebApp.onEvent("mainButtonClicked",function(){
 tg.sendData(item);
})
