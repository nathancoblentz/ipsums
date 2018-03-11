

//BUILD PARAGRAPHS, LIST ITEMS
 
    var p = "<p><span class=\"hide\">&#x3C;p&#x3E;</span>";
    var pClose = "<span class=\"hide\">&#x3C;/p&#x3E;</span></p>";
    var li = "<span class=\"hide\">&#x3C;li&#x3E;</span>";
    var liClose ="<span class=\"hide\">&#x3C;/li&#x3E;</span><br>";
    var tags = document.getElementsByTagName("P").innerHTML;        
    var element = document.getElementById("body");

//showTags() SHOW HTML TAGS 

      function showHTML() {  
            var tags = document.getElementsByTagName("MAIN");
            var toggleActive = document.getElementById("showTags");                     
            for (var i = 0; i < tags.length; i++) {
                  if (document.getElementById("showTags").checked===true) {
                        tags[i].classList.add("show");
                        toggleActive.classList.add("active");
                        console.log('tags are visible');
                        
                  } else {
                    tags[i].classList.remove("show");
                    console.log('tags are hidden');
                    

                  }  
            } 
        }



//radio(): CLEAR OUTPUT DIV; CHECK RADIO BUTTONS TO SELECT IPSUM
 
      function radio() {        
      document.getElementById("ipsum-output").innerHTML="";
      if (document.getElementById("phishOption").checked === true) {
        element.classList.add("phishBody");        
        element.classList.remove("trekBody");
        element.classList.remove("liesBody")
        }
        //else if (document.getElementById("deadOption").checked === true) {
        //element.classList.add("deadBody");
        //element.classList.remove("phishBody");
        //element.classList.remove("trekBody");
        //element.classList.remove("liesBody")}
      else if (document.getElementById("trekOption").checked === true) {
        element.classList.add("trekBody");
        element.classList.remove("phishBody");        
        element.classList.remove("liesBody")
    } else if (document.getElementById("liesOption").checked === true) {
        element.classList.add("liesBody");
        element.classList.remove("phishBody");
        element.classList.remove("trekBody");        
        } else{alert("Choose your ipsum");

        }
      }
 
//SHUFFLE
 
    function shuffle(myArray) {
    var i = 0,
    j = 0, 
    temp = null
    for (var i = myArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = myArray[i];
        myArray[i] = myArray[j];
        myArray[j] = temp;
    }
    return myArray;
    };
 
//shuffleAll(): SHUFFLE ALL THE THINGS: 
 
    function shuffleAll() {
        shuffle(phish);
        shuffle(trek);
        shuffle(dead);
        shuffle(lies);
    }
 
//inject(i): INSERT OUTPUT INTO IPSUM DIV:  
     
    function inject(i) {
        shuffleAll();
        var output = document.getElementById("ipsum-output").innerHTML;
        var output = output + i;
        
        document.getElementById("ipsum-output").innerHTML = output;        
    }
 
//add(a, i): ADD ITEM (PARAMETERS: ARRAY, ITEM)
 
    function add(a, i) {
        shuffleAll();
        inject(i);
    }
 
//pButton(): NEW PARAGRAPH

    function pButton() {
        shuffleAll();
        if (document.getElementById("phishOption").checked === true) {
            var a = phish;
        // } else if (document.getElementById("deadOption").checked === true) {
            //var a = dead; } 
        } else if (document.getElementById("trekOption").checked === true) {
            var a = trek;
        } else if (document.getElementById("liesOption").checked === true) {
            var a = lies;
        } else{
          alert("Choose your ipsum");
        };
        var n = Math.floor(Math.random() * 8 + 2);
        var para = p + (a.slice(1, n)) + pClose;
        add(a, para);
    }
 
//liButton(): NEW LIST ITEM
 
    function liButton() {
        shuffleAll();
            if (document.getElementById("phishOption").checked === true) {
            var a = phish;
            //} else if (document.getElementById("deadOption").checked === true) {
            //var a = dead;
            } else if (document.getElementById("trekOption").checked === true) {
            var a = trek;       
        } else if (document.getElementById("liesOption").checked === true) {
            var a = lies;     
            } else {
            alert("Choose your ipsum");              
      }
        var r = Math.floor(Math.random() * a.length);
        var item = li + a[r] + liClose;
        add(a, item);
      }

//COPY TO CLIPBOARD
 
    function copyToClipboard() {
 
        if(document.selection){
            var range=document.body.createTextRange();
            range.moveToElementText(document.getElementById("ipsum-output"));
            range.select().createTextRange();document.execCommand("copy")
        } else if(window.getSelection){var range=document.createRange();
            range.selectNode(document.getElementById("ipsum-output"));
            window.getSelection().addRange(range);document.execCommand("copy");alert("text copied")
        } else{}}




      radio();