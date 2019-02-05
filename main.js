var rects = [];
var g = [randRect()]; //tableau initiale contenant les coordonnes aleatoire d'un rectangle.//
window.addEventListener("load" , main);

function main(event){
    var n = 10;
    var t = hitTestAll(g,n);
    tableau(5);
    for (var i = 0; i<n; i++){
	factory(tableau[i], t[i].x, t[i].y, t[i].w, t[i].h);
    }
}

function tableau(n){ //Pour creer plusieurs factory j'avais besoin de plusieurs variable "el" different pour cela j'ai une fonction qui creer un tableau contenant des nombre dans des " " pour les definir comme des charactere. Ex: tableau(5) -> [ "0", "1", "2", "3", "4" ].//
    var t = [], i = 0, lettre;
    while(i<n){
        lettre = i + "";
    t.push(lettre);
    i++;
    }
    return t;
}
   

function randRange(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}

function randomColor(){
    return "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
}

function hitTest(r1, r2){
    return (((r1.x + r1.w >= r2.x) && (r1.x <= r2.x + r2.w )) && ((r1.y + r1.h >= r2.y) && (r1.y <= r2.y + r2.h)));
}
   
function hitTestTableau(l,r){ //fonction qui renvoie vrai lorsque qu'il n'ya pas de collision entre les element du tableau et une variable randRect(). //
    var i = 0;
    var len = l.length;
    while(i<len){
        if ( hitTest(l[i],r) == false){
            i++;
        }
        else {
            return false; //Renvoie faux si il existe au moins une colision avec un element //
        }
    }
    return true;
}

function hitTestAll(l,n){  //fonction qui renvoie un tableau contenant des coordonnes de rectangles qui ne sont jamais en collision.//
    var i = 0;
    while(i<n){
        var r1 = randRect();
        if (hitTestTableau(l,r1) == true){
            l.push(r1);
            i++;
        } else {
            i = i;
        }
    }
    return l;
}
        

function randRect(){
    return {x: randRange(0, document.body.clientWidth), y: randRange(0, document.body.clientHeight), w: randRange(10, 200), h: randRange(10, 200)}
}

function factory(el, x, y, w, h){
    var element = document.createElement(el);
    element.style.position = "absolute";
    element.style.left = x + "px";
    element.style.top = y + "px";
    element.style.width = w + "px";
    element.style.height = h + "px";
    element.style.backgroundColor = randomColor();
    document.body.appendChild(element);
}
