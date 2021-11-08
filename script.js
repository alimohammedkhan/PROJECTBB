let url = window.location.href;  //Gets the hostname of the website
/*alert(url);
switch (url){              //Loops the hostname to match with the company
    case "in.puma.com":
    alert("This company is complicit in human rights violation in Occupied Palestine");
    break;
    case "www.axa.com":
    alert("This  company is complicit in human rights violation in Occupied Palestine");
    break;
    case "www.hp.com":
    alert("This  company is complicit in human rights violation in Occupied Palestine");
    break;
    case "www.sodastream.com":
    alert("This  company is complicit in human rights violation in Occupied Palestine");
    break;
    case "www.ahava.com":
    alert("This  company is complicit in human rights violation in Occupied Palestine");
    break;
    case "www.sabra.com":
    alert("This  company is complicit in human rights violation in Occupied Palestine");
    break;
    case "www.pillsbury.com":
    alert("This  company is complicit in human rights violation in Occupied Palestine");
    break;
    case "www.axa.com":
    alert("This  company is complicit in human rights violation in Occupied Palestine");
    break;
    case "www.facebook.com":
    alert("This is a facebook page");
    break;
}*/


//Regular expressions string testing

string = url;
regex1 = /puma/i;  //Test for puma
test = regex1.test(string);
if (test===true) {
    alert("This  company is complicit in human rights violation in Occupied Palestine"
    );
}

regex2 = /axa/i;  //Test for axa
test = regex2.test(string);
if (test===true) {
    alert("This  company is complicit in human rights violation in Occupied Palestine"
    );
}

regex3 = /ahava/i;  //Test for ahava
test = regex3.test(string);
if (test===true) {
    alert("This  company is complicit in human rights violation in Occupied Palestine"
    );
}

regex4 = /hp/i;  //Test for hp
test = regex4.test(string);
if (test===true) {
    alert("This  company is complicit in human rights violation in Occupied Palestine"
    );
}

regex5 = /sodastream/i;  //Test for sodastream
test = regex5.test(string);
if (test===true) {
    alert("This  company is complicit in human rights violation in Occupied Palestine"
    );
}

regex6 = /sabra/i;  //Test for sabra
test = regex6.test(string);
if (test===true) {
    alert("This  company is complicit in human rights violation in Occupied Palestine"
    );
}
regex7 = /pillsbury/i;  //Test for pillsbury
test = regex7.test(string);
if (test===true) {
    alert("This  company is complicit in human rights violation in Occupied Palestine"
    );
}
