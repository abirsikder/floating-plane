
// plane fly

var plane=document.getElementById("plane");
planeTop = 0;
planeLeft = 500;
var call_Move = setInterval(move,25);
function move()
{
		if(planeTop < 30 && planeLeft == 500)
		{
			planeTop++;
			plane.style.top = planeTop + "px";
		}
		else if (planeTop == 30 && planeLeft <510)
		{
			planeLeft++;
			plane.style.left = planeLeft + "px";
		}
		else if (planeTop > 0 && planeLeft == 510)
		{
			planeTop--;
			plane.style.top = planeTop + "px";
		}
		else if(planeLeft > 500)
		{
			planeLeft--;
			plane.style.left = planeLeft + "px";
		}
		
}

// cloud 1 move----

var cloud1 = document.getElementById("cloud1");
cloud1Left = -360;
cloud1Top = 0;
var call_cloud1Move=setInterval(cloud1Move,10);
function cloud1Move()
{
	if(cloud1Left < 1250 && cloud1Top == 0)
	{
		cloud1Left++;
		cloud1.style.display = "block";
		cloud1.style.left = cloud1Left + "px";
	}
	else if (cloud1Left == 1250 && cloud1Top == 0)
	{   
		cloud1Left = -360;
		cloud1Move();
	}
}

// cloud 2 move----

var cloud2 = document.getElementById("cloud2");
cloud2Left = -160;
cloud2Top = 50;
var call_cloud2Move = setInterval(cloud2Move,12);
function cloud2Move()
{
	if(cloud2Left < 1250 && cloud2Top == 50)
	{
		cloud2Left++;
		cloud2.style.display = "block";
		cloud2.style.left = cloud2Left + "px";
	}
	else if (cloud2Left == 1250 && cloud2Top == 50)
	{   
		cloud2Left = -160;
		cloud2Move();
	}
}

// cloud 3 move----

var cloud3 = document.getElementById("cloud3");
cloud3Left = -900;
cloud3Top = 150;
var call_cloud3Move = setInterval(cloud3Move,8);
function cloud3Move()
{
	if(cloud3Left < 1250 && cloud3Top == 150)
	{
		cloud3Left++;
		cloud3.style.display = "block";
		cloud3.style.left = cloud3Left + "px";
	}
	else if (cloud3Left == 1250 && cloud3Top == 150)
	{   
		cloud3Left = -900;
		cloud3Move();
	}
}

// cloud 4 move----

var cloud4 = document.getElementById("cloud4");
cloud4Left = -640;
cloud4Top = 260;
var call_cloud4Move=setInterval(cloud4Move,7);
function cloud4Move()
{
	if(cloud4Left < 1250 && cloud4Top == 260)
	{
		cloud4Left++;
		cloud4.style.display = "block";
		cloud4.style.left = cloud4Left + "px";
	}
	else if (cloud4Left == 1250 && cloud4Top == 260)
	{   
		cloud4Left = -640;
		cloud4Move();
	}
}
    
    
    
    
    
    
    
    
    
    
    
    
    
    



















