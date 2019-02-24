var leftClick = document.getElementById ('leftClick');
var rightClick = document.getElementById ('rightClick');
var checkFirst = 0;
var imageArrayContainer = document.getElementById('imageContainer');
var imageArray = imageArrayContainer.getElementsByTagName('img');
var arrayLength = imageArray.length;
var sliderCounter=0;
arrayLength--;
var lastButOne=arrayLength;
lastButOne--;
rightClick.addEventListener("click",function(evt)
{
	evt.preventDefault();
	if(sliderCounter==0)
	{
		imageArray[sliderCounter].classList.add("hidden");
		leftClick.classList.remove("hidden");
		sliderCounter++;
		imageArray[sliderCounter].classList.remove("hidden");
	}
	else if(sliderCounter==lastButOne)
	{
		imageArray[sliderCounter].classList.add("hidden");
		rightClick.classList.add("hidden");
		sliderCounter++;
		
		imageArray[sliderCounter].classList.remove("hidden");
	}
	else if(sliderCounter==arrayLength--)
	{	
		rightClick.classList.add("hidden");
	}
	else 
	{
		imageArray[sliderCounter].classList.add("hidden");
		leftClick.classList.remove("hidden");
		sliderCounter++;
		imageArray[sliderCounter].classList.remove("hidden");
	}
});

leftClick.addEventListener("click",function(evt)
{
	evt.preventDefault();
	if(sliderCounter!=0 && sliderCounter!=1)
	{
		rightClick.classList.remove("hidden");
		imageArray[sliderCounter].classList.add("hidden");
		sliderCounter--;
		imageArray[sliderCounter].classList.remove("hidden");
	}
	else if(sliderCounter==1)
	{
		imageArray[sliderCounter].classList.add("hidden");
		leftClick.classList.add("hidden");
		sliderCounter--;
		imageArray[sliderCounter].classList.remove("hidden");
	}

});

var picArrayContainer = document.getElementById("sliderImageBigPic");
var backgroundColor = document.getElementById("TB_overlay");
//console.log(backgroundColor);
//console.log(picArrayContainer);
var picArray = picArrayContainer.getElementsByTagName("img");
var picArrayLenght = picArray.lenght;

imageArrayContainer.addEventListener("click",function(evt)
{
	evt.preventDefault();
	picArray[sliderCounter].classList.remove("hidden");
	backgroundColor.classList.remove("hidden");
	//alert("Click on image");
	console.log(sliderCounter);
});

 picArrayContainer.addEventListener("click", function(evt)
 {
 	evt.preventDefault();
 	picArray[sliderCounter].classList.add("hidden");
 	backgroundColor.classList.add("hidden");
 	//alert("Click on pic!");
 });