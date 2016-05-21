function cart(id,suit,range,src)
{
    this.id = id;
    this.suit=suit;
    this.range=range;
    this.src=src;
}

var masCarts = new Array();

function Soliter() {
    this.masCarts = new Array();

    this.pointCount = 0;
    this.results = new Array();


    this.results1 = new Array();
    this.results2 = new Array();
    this.results3 = new Array();
    this.results4 = new Array();

    this.mas1bot =70;

    this.mas2bot =55;
    this.mas3bot =40;
    this.mas4bot =25;
    this.mas5bot =10;
    this.mas6bot =-5;
    this.mas7bot =-15;

    this.mas1 = new Array();
    this.mas2 = new Array();
    this.mas3 = new Array();
    this.mas4 = new Array();
    this.mas5 = new Array();
    this.mas6 = new Array();
    this.mas7 = new Array();

    this.fullCarts = new Array();

    this.fuullDivCount = 0;

    this.fullcart = new Array();

    this.start = function () {
        this.initilize();
        this.initilizeGame();
        

    }

    this.initilize = function () {

        this.masCarts.push(new cart(1, "bybn", "2", "Images/2bybn.png"));
        this.masCarts.push(new cart(2, "bybn", "3", "Images/3bybn.png"));
        this.masCarts.push(new cart(3, "bybn", "4", "Images/4bybn.png"));
        this.masCarts.push(new cart(4, "bybn", "5", "Images/5bybn.png"));
        this.masCarts.push(new cart(5, "bybn", "6", "Images/6bybn.png"));
        this.masCarts.push(new cart(6, "bybn", "7", "Images/7bybn.png"));
        this.masCarts.push(new cart(7, "bybn", "8", "Images/8bybn.png"));
        this.masCarts.push(new cart(8, "bybn", "9", "Images/9bybn.png"));
        this.masCarts.push(new cart(9, "bybn", "10", "Images/10bybn.png"));
        this.masCarts.push(new cart(10, "bybn", "v", "Images/vbybn.png"));
        this.masCarts.push(new cart(11, "bybn", "d", "Images/dbybn.png"));
        this.masCarts.push(new cart(12, "bybn", "k", "Images/kbybn.png"));
        this.masCarts.push(new cart(13, "bybn", "t", "Images/tbybn.png"));

        this.masCarts.push(new cart(14, "cerv", "2", "Images/2cerv.png"));
        this.masCarts.push(new cart(15, "cerv", "3", "Images/3cerv.png"));
        this.masCarts.push(new cart(16, "cerv", "4", "Images/4cerv.png"));
        this.masCarts.push(new cart(17, "cerv", "5", "Images/5cerv.png"));
        this.masCarts.push(new cart(18, "cerv", "6", "Images/6cerv.png"));
        this.masCarts.push(new cart(19, "cerv", "7", "Images/7cerv.png"));
        this.masCarts.push(new cart(20, "cerv", "8", "Images/8cerv.png"));
        this.masCarts.push(new cart(21, "cerv", "9", "Images/9cerv.png"));
        this.masCarts.push(new cart(22, "cerv", "10", "Images/10cerv.png"));
        this.masCarts.push(new cart(23, "cerv", "v", "Images/vcerv.png"));
        this.masCarts.push(new cart(24, "cerv", "d", "Images/dcerv.png"));
        this.masCarts.push(new cart(25, "cerv", "k", "Images/kcerv.png"));
        this.masCarts.push(new cart(26, "cerv", "t", "Images/tcerv.png"));

        this.masCarts.push(new cart(27, "tref", "2", "Images/2tref.png"));
        this.masCarts.push(new cart(28, "tref", "3", "Images/3tref.png"));
        this.masCarts.push(new cart(29, "tref", "4", "Images/4tref.png"));
        this.masCarts.push(new cart(30, "tref", "5", "Images/5tref.png"));
        this.masCarts.push(new cart(31, "tref", "6", "Images/6tref.png"));
        this.masCarts.push(new cart(32, "tref", "7", "Images/7tref.png"));
        this.masCarts.push(new cart(33, "tref", "8", "Images/8tref.png"));
        this.masCarts.push(new cart(34, "tref", "9", "Images/9tref.png"));
        this.masCarts.push(new cart(35, "tref", "10", "Images/10tref.png"));
        this.masCarts.push(new cart(36, "tref", "v", "Images/vtref.png"));
        this.masCarts.push(new cart(37, "tref", "d", "Images/dtref.png"));
        this.masCarts.push(new cart(38, "tref", "k", "Images/ktref.png"));
        this.masCarts.push(new cart(39, "tref", "t", "Images/ttref.png"));

        this.masCarts.push(new cart(40, "pic", "2", "Images/2pic.png"));
        this.masCarts.push(new cart(41, "pic", "3", "Images/3pic.png"));
        this.masCarts.push(new cart(42, "pic", "4", "Images/4pic.png"));
        this.masCarts.push(new cart(43, "pic", "5", "Images/5pic.png"));
        this.masCarts.push(new cart(44, "pic", "6", "Images/6pic.png"));
        this.masCarts.push(new cart(45, "pic", "7", "Images/7pic.png"));
        this.masCarts.push(new cart(46, "pic", "8", "Images/8pic.png"));
        this.masCarts.push(new cart(47, "pic", "9", "Images/9pic.png"));
        this.masCarts.push(new cart(48, "pic", "10", "Images/10pic.png"));
        this.masCarts.push(new cart(49, "pic", "v", "Images/vpic.png"));
        this.masCarts.push(new cart(50, "pic", "d", "Images/dpic.png"));
        this.masCarts.push(new cart(51, "pic", "k", "Images/kpic.png"));
        this.masCarts.push(new cart(52, "pic", "t", "Images/tpic.png"));


    }

    this.delResultById=function(idResult)
    {
        var div = document.getElementById(idResult);
        while (div.firstChild)
        {
            div.removeChild(div.firstChild);
        }

    }

    this.generateResultDiv = function (mas, iddiv)
    {
        this.delResultById(iddiv);

        var img = document.createElement("img");
        img.draggable = true;
        img.setAttribute("width", "125px");
        img.setAttribute("height", "80px");
        img.setAttribute("class", iddiv);

        img.setAttribute("id",mas[mas.length - 1].id);
        img.setAttribute("src", mas[mas.length - 1].src);
        document.getElementById(iddiv).appendChild(img);

    }

    this.isfinal = function ()
    {
        if (this.pointCount == 52)
        {
            alert("winner game!!!");
        }
    }

    this.addresult1 = function (cart,iddiv,id2)
    {
        if (this.results1.length == 0 && cart.range == "t")

        {
            this.results1.push(cart);
            this.pointCount++;
            this.isfinal();
            this.generateResultDiv(this.results1, iddiv);
            this.rDiv(id2)
        }
        if (this.results1.length == 1)
        {
            var suitLast = this.results1[this.results1.length - 1].suit;

            if (cart.suit == suitLast && cart.range == "2")
            {
                this.results1.push(cart);
                this.pointCount++;
                this.isfinal();
                this.generateResultDiv(this.results1, iddiv);
                this.rDiv(id2)

            }
        }

        if (this.results1.length > 1)
        {
            var suitLast = this.results1[this.results1.length - 1].suit;
            var rangeLast = this.results1[this.results1.length - 1].range;
            var rangeNewCart = cart.range;
            var suitNewCart = cart.suit;
            var rang1 = this.getRange(rangeLast);
            var rang2 = this.getRange(rangeNewCart);


            if (suitLast == suitNewCart && (rang2 - rang1 == 1)) {
                this.results1.push(cart);
                this.pointCount++;
                this.isfinal();
                this.generateResultDiv(this.results1, iddiv);
                this.rDiv(id2)
            }
        }
             

    }

    this.addresult2 = function (cart, iddiv,id2)
    {

        if (this.results2.length == 0 && cart.range == "t") {
            this.results2.push(cart);
            this.pointCount++;
            this.isfinal();
            this.generateResultDiv(this.results2, iddiv);
            this.rDiv(id2)
        }
        if (this.results2.length == 1) {
            var suitLast = this.results2[this.results2.length - 1].suit;

            if (cart.suit == suitLast && cart.range == "2") {
                this.results2.push(cart);
                this.pointCount++;
                this.isfinal();
                this.generateResultDiv(this.results2, iddiv);
                this.rDiv(id2)

            }
        }

        if (this.results2.length > 1) {
            var suitLast = this.results2[this.results2.length - 1].suit;
            var rangeLast = this.results2[this.results2.length - 1].range;
            var rangeNewCart = cart.range;
            var suitNewCart = cart.suit;
            var rang1 = this.getRange(rangeLast);
            var rang2 = this.getRange(rangeNewCart);


            if (suitLast == suitNewCart && (rang2 - rang1 == 1))
            {
                this.results2.push(cart);
                this.pointCount++;
                this.isfinal();
                this.generateResultDiv(this.results2, iddiv);
                this.rDiv(id2)
            }
        }



    }

    this.addresult3 = function (cart, iddiv,id2)
    {
        if (this.results3.length == 0 && cart.range == "t") {
            this.results3.push(cart);
            this.pointCount++;
            this.isfinal();
            this.generateResultDiv(this.results3, iddiv);
            this.rDiv(id2)
        }
        if (this.results3.length == 1) {
            var suitLast = this.results3[this.results3.length - 1].suit;

            if (cart.suit == suitLast && cart.range == "2") {
                this.results3.push(cart);
                this.pointCount++;
                this.isfinal();
                this.generateResultDiv(this.results3, iddiv);
                this.rDiv(id2)

            }
        }

        if (this.results3.length > 1) {
            var suitLast = this.results3[this.results3.length - 1].suit;
            var rangeLast = this.results3[this.results3.length - 1].range;
            var rangeNewCart = cart.range;
            var suitNewCart = cart.suit;
            var rang1 = this.getRange(rangeLast);
            var rang2 = this.getRange(rangeNewCart);


            if (suitLast == suitNewCart && (rang2 - rang1 == 1)) {
                this.results3.push(cart);
                this.pointCount++;
                this.isfinal();
                this.generateResultDiv(this.results3, iddiv);
                this.rDiv(id2)
            }
        }

    }

    this.addresult4 = function (cart, iddiv,id2)
    {
        if (this.results4.length == 0 && cart.range == "t") {
            this.results4.push(cart);
            this.pointCount++;
            this.isfinal();
            this.generateResultDiv(this.results4, iddiv);
            this.rDiv(id2)
        }
        if (this.results1.length == 1) {
            var suitLast = this.results4[this.results4.length - 1].suit;

            if (cart.suit == suitLast && cart.range == "2") {
                this.results4.push(cart);
                this.pointCount++;
                this.isfinal();
                this.generateResultDiv(this.results4, iddiv);
                this.rDiv(id2)

            }
        }

        if (this.results4.length > 1) {
            var suitLast = this.results4[this.results4.length - 1].suit;
            var rangeLast = this.results4[this.results4.length - 1].range;
            var rangeNewCart = cart.range;
            var suitNewCart = cart.suit;
            var rang1 = this.getRange(rangeLast);
            var rang2 = this.getRange(rangeNewCart);


            if (suitLast == suitNewCart && (rang2 - rang1 == 1)) {
                this.results4.push(cart);
                this.pointCount++;
                this.isfinal();
                this.generateResultDiv(this.results4, iddiv);
                this.rDiv(id2)
            }
        }


    }



    this.getRange = function (stringRange)
    {
        var rang;
        var ranges = new Array();
        ranges.push("2");
        ranges.push("3");
        ranges.push("4");
        ranges.push("5");
        ranges.push("6");
        ranges.push("7");
        ranges.push("8");
        ranges.push("9");
        ranges.push("10");
        ranges.push("v");
        ranges.push("d");
        ranges.push("k");
        ranges.push("t");

        for (s = 0; s < ranges.length; s++) {
            if (ranges[s] == stringRange)
            {
                rang =s;
            }
            
        }

        return rang;
    }

    this.getResult = function (idCart, iddiv,iddiv2)
    {
        var cart = this.getCartById(idCart);
       

        switch (iddiv)
        {
            case "result1":
                this.addresult1(cart, iddiv,iddiv2);
               
                break;

            case "result2":
                this.addresult2(cart, iddiv,iddiv2);
                break;

            case "result3":
                this.addresult3(cart, iddiv,iddiv2);
                break;

            case "result4":
                this.addresult4(cart, iddiv,iddiv2);
                break;

        }

    }

    
    this.getCartById = function (idCart)
    {
        for (j = 0; j < this.masCarts.length; j++)
        {
            if (idCart == this.masCarts[j].id)
            {
                return this.masCarts[j];
            }
        }
    }

    this.generateFullCarts = function ()
    {
        
        for (f = 0; f < this.masCarts.length; f++)
        {
            var flag=true;
            for (c = 0; c < this.results.length; c++)
            {
                if (this.results[c] == f)
                {
                    flag = false;
                    
                }
            }
            if (flag == true)
            {
                this.fullCarts.push(this.masCarts[f]);
            }
        }
    }



        this.fullDivClick = function ()
        {
            
            this.fullcart.push(this.fullCarts.pop(this.fullCarts.length - 1));
            this.fuullDivCount++;
            this.generateFullDiv();

        }

        this.delFullDiv = function ()
        {
            var div = document.getElementById("full");
            while (div.firstChild)
            {
                div.removeChild(div.firstChild);
            }
            this.fuullDivCount = this.fuullDivCount - 1;
        }

        this.generateFullDiv=function()
        {
            this.delFullDiv();
            if (this.fullcart.length > 0 && this.fullCarts.length>0) {


                var img = document.createElement("img");
                img.draggable = true;
                img.setAttribute("width", "125px");
                img.setAttribute("height", "80px");
                img.setAttribute("class", "full");
                img.setAttribute("id", this.fullcart[this.fullcart.length - 1].id);
                img.setAttribute("src", this.fullcart[this.fullcart.length - 1].src);

               
                document.getElementById("full").appendChild(img);
            }

            if (this.fullCarts == 0)
            {
                for (t = 0; t < this.fullcart.length; t++)
                {
                    this.fullCarts.push(this.fullcart[t]);
                }

                this.fullcart.length = 0;
            }
        }

        this.resetGame = function ()
        {
            this.mas1.length = 0;
            this.mas2.length = 0;
            this.mas3.length = 0;
            this.mas4.length = 0;
            this.mas5.length = 0;
            this.mas6.length = 0;
            this.mas7.length = 0;
            this.fullCarts.length = 0;
            this.fullcart.length = 0;
            this.results.length = 0;
            this.results1.length = 0;
            this.results2.length = 0;
            this.results3.length = 0;
            this.results4.length = 0;
            this.mas1bot = 70;

            this.mas2bot = 55;
            this.mas3bot = 40;
            this.mas4bot = 25;
            this.mas5bot = 10;
            this.mas6bot = -5;
            this.mas7bot = -15;

            this.deleteDivBYID("main");
            this.deleteDivBYID("main2");
            this.deleteDivBYID("main3");
            this.deleteDivBYID("main4");
            this.deleteDivBYID("main5");
            this.deleteDivBYID("main6");
            this.deleteDivBYID("main7");
            this.deleteDivBYID("full");
            this.deleteDivBYID("result1");
            this.deleteDivBYID("result2");
            this.deleteDivBYID("result3");
            this.deleteDivBYID("result4");
            this.pointCount = 0;


        }

        this.deleteDivBYID = function (iddiv)
        {
            var div = document.getElementById(iddiv);
            while (div.firstChild) {
                div.removeChild(div.firstChild);
            }
            
        }
            
    this.getImageById = function (id) {
        return this.masCarts[id];
    }

    this.getCartByid1 = function (id,iddiv)
    {

        var c;
        for (cart = 0; cart < this.masCarts.length; cart++)
        {
            if (this.masCarts[cart].id == id)
            {
                c= this.masCarts[cart];
            }
                         
        }

        this.mas1.push(c);
        this.addImage(this.mas1, "main", this.mas1bot);
        this.mas1bot = this.mas1bot - 15;
        this.rDiv(iddiv);

        
    }

    this.getCartByid2 = function (id,iddiv) {

        var c;
        for (cart = 0; cart < this.masCarts.length; cart++) {
            if (this.masCarts[cart].id == id) {
                c = this.masCarts[cart];
            }

        }

        this.mas2.push(c);
        this.addImage(this.mas2, "main2",this.mas2bot);
        this.mas2bot = this.mas2bot - 15;
        this.rDiv(iddiv);


    }

    this.getCartByid3 = function (id,iddiv) {

        var c;
        for (cart = 0; cart < this.masCarts.length; cart++) {
            if (this.masCarts[cart].id == id) {
                c = this.masCarts[cart];
            }

        }
        
        this.mas3.push(c);
        this.addImage(this.mas3, "main3",this.mas3bot);
        this.mas3bot = this.mas3bot - 15;
        this.rDiv(iddiv);


    }

    this.getCartByid4 = function (id,iddiv) {

        var c;
        for (cart = 0; cart < this.masCarts.length; cart++) {
            if (this.masCarts[cart].id == id) {
                c = this.masCarts[cart];
            }

        }

        this.mas4.push(c);
        this.addImage(this.mas4, "main4", this.mas4bot);
        this.mas4bot = this.mas4bot - 15;
        this.rDiv(iddiv);


    }

    this.getCartByid5 = function (id,iddiv) {

        var c;
        for (cart = 0; cart < this.masCarts.length; cart++) {
            if (this.masCarts[cart].id == id) {
                c = this.masCarts[cart];
            }

        }

        this.mas5.push(c);
        this.addImage(this.mas5, "main5",this.mas5bot);
        this.mas5bot = this.mas5bot - 15;
        this.rDiv(iddiv);

    }
    this.getCartByid6 = function (id,iddiv) {

        var c;
        for (cart = 0; cart < this.masCarts.length; cart++) {
            if (this.masCarts[cart].id == id) {
                c = this.masCarts[cart];
            }

        }

        this.mas6.push(c);
        this.addImage(this.mas6, "main6",this.mas6bot);
        this.mas6bot = this.mas6bot - 15;
        this.rDiv(iddiv);

    }
    this.getCartByid7 = function (id,iddiv) {

        var c;
        for (cart = 0; cart < this.masCarts.length; cart++) {
            if (this.masCarts[cart].id == id) {
                c = this.masCarts[cart];
            }

        }

        this.mas7.push(c);
        this.addImage(this.mas7, "main7", this.mas7bot);
        this.rDiv(iddiv);
        this.mas7bot = this.mas7bot - 15;


    }

    this.check = function (i) {
        var flag = false;
        for (j = 0; j < this.results.length; j++) {
            if (this.results[j] == i) {
                return true;

            }
        }
        return flag;
    }

    this.initilizeColumn = function (count, resMas) {
        for (k = 0; k < count; k++) {
            var flag = true;
            while (flag == true) {
                var a = Math.floor((Math.random() * 52) + 0);
                if (this.check(a) == false) {
                    resMas.push(this.getImageById(a));

                    this.results.push(a);

                    flag = false;

                }
            }
        }
    }

    this.initilizeGame = function () {
        this.initilizeColumn(1, this.mas1);
        this.initilizeColumn(2, this.mas2);
        this.initilizeColumn(3, this.mas3);
        this.initilizeColumn(4, this.mas4);
        this.initilizeColumn(5, this.mas5);
        this.initilizeColumn(6, this.mas6);
        this.initilizeColumn(7, this.mas7);

        this.createImageDiv(this.mas1, "main");
        this.createImageDiv(this.mas2, "main2");
        this.createImageDiv(this.mas3, "main3");
        this.createImageDiv(this.mas4, "main4");
        this.createImageDiv(this.mas5, "main5");
        this.createImageDiv(this.mas6, "main6");
        this.createImageDiv(this.mas7, "main7");
    }
    this.rDiv = function (iddiv)
    {
        
        switch (iddiv) {

            case "main":
                this.mas1.pop(this.mas1.length - 1);
                this.clearDivByID(iddiv)
                this.createImageDiv(this.mas1, iddiv);
                
                break;
            case "main2":
                this.mas2.pop(this.mas2.length - 1);
                this.clearDivByID(iddiv)
                this.createImageDiv(this.mas2,iddiv);
                break;
            case "main3":
                this.mas3.pop(this.mas3.length - 1);
                this.clearDivByID(iddiv)
                this.createImageDiv(this.mas3,iddiv);
                
                break;

            case "main4":
                this.clearDivByID(iddiv);
                this.mas4.pop(this.mas4.length - 1);
                
                
                this.createImageDiv(this.mas4,iddiv);
                
                break;

            case "main5":
                this.mas5.pop(this.mas5.length - 1);
                this.clearDivByID(iddiv)
                this.createImageDiv(this.mas5,iddiv);
                break;

            case "main6":
                this.mas6.pop(this.mas6.length - 1);
                this.clearDivByID(iddiv)
                this.createImageDiv(this.mas6,iddiv);
                break;

            case "main7":
                this.mas7.pop(this.mas7.length - 1);
                this.clearDivByID(iddiv)
                this.createImageDiv(this.mas7,iddiv);
                break;
            case "full":
                this.fullcart.pop(this.fullcart.length - 1);
                this.delFullDiv();
                this.generateFullDiv();
                break;

        }


    }

    this.method = function (idcart, iddiv)
    {

        
        var c;
        for (cart = 0; cart < this.masCarts.length; cart++)
        {
            if (this.masCarts[cart].id == idcart) {
                c = this.masCarts[cart];
            }

        }
               
        if (c == undefined)
        {
            c = this.fullcart[this.fullcart.length - 1];
            
        }
                 
        
        var flag;
        switch (iddiv)
        {
            case "main":

                flag = this.checCarts(c, this.mas1[this.mas1.length - 1]);

                break;
            case "main2":
                flag = this.checCarts(c, this.mas2[this.mas2.length - 1]);
                break;
            case "main3":
                flag = this.checCarts(c, this.mas3[this.mas3.length - 1]);
                break;
            case "main4":
                flag = this.checCarts(c, this.mas4[this.mas4.length - 1]);
                break;
            case "main5":
                flag = this.checCarts(c, this.mas5[this.mas5.length - 1]);
                break;
            case "main6":
                flag = this.checCarts(c, this.mas6[this.mas6.length - 1]);
                break;
            case "main7":
                flag = this.checCarts(c, this.mas7[this.mas7.length - 1]);
                break;
                

           
        }
        return flag;
    }

    this.checCarts=function(car1,car2)
    {
        var ranges = new Array();
        ranges.push("2");
        ranges.push("3");
        ranges.push("4");
        ranges.push("5");
        ranges.push("6");
        ranges.push("7");
        ranges.push("8");
        ranges.push("9");
        ranges.push("10");
        ranges.push("v");
        ranges.push("d");
        ranges.push("k");
        ranges.push("t");
        var c1, c2;
        var range1, range2;

        for (i = 0; i < ranges.length; i++) {
            if (ranges[i] == car1.range) {
                range1 = i;
            }
            if (ranges[i] == car2.range) {
                range2 = i;
            }
        }

        if (car1.suit == "tref" || car1.suit == "pic") {
            c1 = "dark";
        }
        else {
            c1 = "red";

        }

        if (car2.suit == "tref" || car2.suit == "pic") {
            c2 = "dark";
        }
        else {
            c2 = "red";

        }

        if ((range2 - range1 == 1) && (c1 == "red" && c2 == "dark")) {
            return true;
        }
        else if ((range2 - range1 == 1) && (c1 == "dark" && c2 == "red")) {
            return true;
        }
        else {
            return false;

        }
    }
    
    this.addImage = function (mas,iddiv,bottom)
    {
        var div = document.createElement("div");
        div.style.position = "relative";
        div.style.bottom = bottom.toString() + "px";
        div.style.height = "0px";
        var img = document.createElement("img");
        img.draggable = true;
        img.setAttribute("width", "125px");
        img.setAttribute("id", mas[mas.length - 1].id);
        img.setAttribute("height", "80px");
        img.setAttribute("class", iddiv);
        img.setAttribute("src", mas[mas.length - 1].src);
        div.appendChild(img);
        document.getElementById(iddiv).appendChild(div);

    }

    this.clearDivByID=function(divId)
    {
        var div = document.getElementById(divId);
        while (div.firstChild)
        {
            div.removeChild(div.firstChild);
        }
    }

    this.createImageDiv = function (mas, iddiv) {
        var boottom = 85;
       
        
        for (l = 0; l < mas.length; l++) {
            var div = document.createElement("div");
            div.style.position = "relative";
            div.style.bottom =boottom.toString() + "px";
            div.style.height = "0px";

            var img = document.createElement("img");

            if (l < mas.length - 1) {
                img.setAttribute("src", "Images/ruba.png");
            }
            else {
                img.setAttribute("src", mas[l].src);
            }

            img.setAttribute("width", "125px");
            img.setAttribute("height", "80px");
            img.draggable = true;
            img.setAttribute("class", iddiv);
            //img.ondragstart = function () {

            //    drag(event);
            //}
            img.setAttribute("id", mas[l].id);

            div.appendChild(img);

            boottom =boottom - 15;

            document.getElementById(iddiv).appendChild(div);

        }

    }
}














   







    
    

    

   
   




       


    










    

