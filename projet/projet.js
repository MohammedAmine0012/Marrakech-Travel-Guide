
const aside = document.querySelector('aside');
const section =document.querySelector('section');
var pe = document.getElementById('pe');
var h2 =document.querySelector('h2');
var image = document.querySelector('img');
var button1 =document.getElementById('button');
var body= document.querySelector('body');
var d1 =document.getElementById('i2');
var footer =document.querySelector("footer");
var copyright =document.getElementById('copy');
footer.style.top="50vh";
copyright.style.top="50vh";


  const para1 =  `Pick up from Marrakech at 9:00 , by an aircondition transport heading west to visit the Agafay Desert where you will ride camels for short trip enjoying the great views of this area, having some mint tea offered by local person there .After that head up passing by Amezmiz valleys crossing farms and many villages over the KIK plateau that allow to see the great Atlas Mountain Chain , the trip continues passing by Asni stopping for photos along the valley to get to Imlil Called also ( Ptit Chamonix de L'Atlas) where you start hiking trek to the berber villages of the Atlas Mountain , meeting locals , visit the waterfalls of Armed village and see the highest peak in North Africa ( Toubkal 4167m).
  The lunch will be served in local house prepar0ed by local family .After the delicious meal you will meet your transport and back to Marrakech , along you will visit local women cooperative to see how locals women earn living and they make local product.`;
  const para2 = "La ville ocre, déjà connue pour son climat et ses dizaines de greens étendues, vous propose des parcours exceptionnels avec pour toile de fond les montagnes de l’Atlas, faisant incontestablement de Marrakech une destination golfique, Certains sont à quelques minutes du centre-ville et d’autres aux abords proches.Avec une diversité de paysages des conditions climatiques idéales, notamment en hiver où les températures restent clémentes, les 36593 mètres de parcours raviront les passionnés, quel que soit leur niveau, partis à l’assaut des greens 9 ou 18 trous.Avec une diversité de paysages des conditions climatiques idéales, notamment en hiver où les températures restent clémentes, les 36593 mètres de parcours raviront les passionnés, quel que soit leur niveau, partis à l’assaut des greens 9 ou 18 trous";
 const para3= "Découvrez le Maroc dans un esprit d’aventure en tout confort et confiance ! Dunes &amp; Désert vous offre un large choix d’activités et de loisirs au départ de Marrakech et du désert d’Agafay.Depuis 2007, nous créons pour vous des aventures qui donneront un esprit différent à vos vacances à Marrakech. Sortez des sentiers battus, parcourrez les plus belles pistes, découvrez des déserts fantastiques et profitez de la lumière unique du Maroc ! Le top des activités autour de Marrakech sont proposées ici par Dunes &amp; Desert. Optez pour la qualité, le service et l’aventure !La qualité de votre expérience est notre priorité. Tous nos guides sont des professionnels accomplis";
  const para4 ="Voyagez de Marrakech à Fès avec une escale dans le désert en cours de route avec ce transfert hybride en petit groupe. Vous visiterez la Kasbah d'Ait Ben Haddou, passerez du temps dans les gorges de Todra et ferez un safari de nuit à dos de chameau dans un camp du désert du Sahara, le tout en trois jours. Le petit-déjeuner et le dîner sont inclus Un safari à dos de chameau est inclus dans le prix du tour Le sandboard est inclus Tailles de visite limitées à seulement 15 participants";     
  const para5= "Regardez le soleil se lever sur la poussière rouge, les palmeraies et les majestueux paysages ouverts depuis une montgolfière. Volez avec un petit groupe de voyageurs et profitez des commentaires en direct de votre pilote chevronné, imprégnez-vous de la vue pendant que vous glissez dans les airs, puis faites le plein avec un authentique petit-déjeuner berbère dans une tente marocaine. Pour plus de facilité, votre visite comprend des transferts aller-retour de porte à porte";
  const para6 ="Combinez une visite dans le désert de Merzouga avec un safari à dos de chameau avec cette excursion au départ de Marrakech. Vous visiterez les montagnes de l'Atlas, découvrirez la Kasbah Ait Ben Haddou, classée au patrimoine mondial de l'UNESCO, ferez une promenade à dos de chameau au coucher du soleil et passerez la nuit dans un camp du désert berbère, où des spectacles et un dîner traditionnel vous attendent, le tout en seulement deux nuits et trois jour";
  const para7="Khmisa et Kawtar, deux marocaines passionnées de cuisine, vous accueillent à Marrakech pour un repas chez Khmisa au coeur de la Médina dans la pure tradition de la cuisine marocaine et dans une ambiance familiale et chaleureuse. Khmisa, Chef depuis maintenant 25 ans, spécialisé dans la cuisine et la pâtisserie marocaine, a travaillé pour plusieurs établissements hôteliers de renom dans les villes de Rabat et Marrakech. Kawtar, diplômé d'un baccalauréat en hôtellerie et tourisme, vous assistera également pendant votre cours de cuisine et aidera à la communication entre vous et le chef.";
 const para8= "Montez à dos de chameau dans le Sahara lors d'une excursion de 3 jours au départ de Marrakech qui comprend une nuit dans un camp du désert berbère. La combinaison de points forts naturels et historiques permet de tirer le meilleur parti du voyage par voie terrestre devant des gorges imposantes, des villes anciennes et des dunes imposantes. En réservant une excursion dans la région désertique reculée, vous troquerez une logistique complexe à faire soi-même contre une immersion dans les paysages spectaculaires de l'ouest du Maroc.";
 let src8= "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/e0/93/88.jpg";
 let src7= "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3b/f3/73.jpg";
 let src6= "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/ef/af/20.jpg";
 let src5= "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/e8/e9/e5.jpg";
 let src4= "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/e0/04/7f.jpg";
 let src3 = "https://k5z6c3y6.rocketcdn.me/wp-content/uploads/2021/02/003.jpg";
 let src2= "https://k5z6c3y6.rocketcdn.me/wp-content/uploads/2021/02/golf-al-maaden-marrakech-golfs-du-maroc.jpg";
 let src1 = 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/0d/15/b8/kasbahs-oasis.jpg?w=900&h=-1&s=1';
 var srcs =[src1,src2,src3,src4,src5,src6,src7,src8]
 const tilte8="Circuit 3 jours 2 nuits dans le désert marocain de Marrakech à Merzouga";
 const tilte7="Cours de cuisine marocaine Marrakech avec le chef Khmisa";
 const tilte6="Combinez une visite dans le désert de Merzouga";
 const tilte5="Vol en montgolfière au-dessus de Marrakech avec petit-déjeuner traditionnel";
 const tilte4="Marrakech à Fès via Merzouga Desert 3-Days Morocco Sahara Tour";
 const tilte3="dune & desert";
 const tilte2="le golf à marrakech";
 const tilte1='desert agfay tour from marrakech and atlas moutains and camel ride';
 var b1=document.createElement('div');
b1.innerHTML=`<img  src=${src1} id="b1"><p>${tilte1}</p>`;
var b2=document.createElement('div');
b2.innerHTML=`<img  src=${src2} id="b1"><p>${tilte2}</p>`;
var b3=document.createElement('div');
b3.innerHTML=`<img  src=${src3} id="b1"><p>${tilte3}</p>`;
var b4=document.createElement("div");
b4.innerHTML=`<img  src=${src4} id="b1"><p>${tilte4}</p>`;
var b5=document.createElement("div");
b5.innerHTML=`<img  src=${src5} id="b1"><p>${tilte5}</p>`;
var b6=document.createElement("div");
b6.innerHTML=`<img  src=${src6} id="b1"><p>${tilte6}</p>`;
var b7=document.createElement("div");
b7.innerHTML=`<img  src=${src7} id="b1"><p>${tilte7}</p>`;
 var b8=document.createElement("div");  
 b8.innerHTML=`<img  src=${src8} id="b1"><p>${tilte8}</p>`;

 aside.appendChild(b1);
aside.appendChild(b2);
aside.appendChild(b3);
aside.appendChild(b4);
aside.appendChild(b5);
aside.appendChild(b6);
aside.appendChild(b7);
aside.appendChild(b8);
var prix =["200$","300$","200$","80$","140$","150$","220$","90$"];
var time =["de 6h à 10h","de 6h à 8h","de 10h à 24h","de 72h à 96h","de 4h à 6h","de 8h à 10h","de 4h à 6h","de 72h à 96h"];
var ocali =["1https://goo.gl/maps/wZEBMR6KLUcUPWnQ7","https://goo.gl/maps/FYAerrh91rWgbahu7","https://goo.gl/maps/AocWkciFgehPz2Rv5","https://goo.gl/maps/rXkojpciqBMKKcNW8","https://goo.gl/maps/qxbHvDTNfZExxyuR8","https://goo.gl/maps/6XWi21M8na9MD4eM6","https://goo.gl/maps/Tx7BEx9dhA8sRyJ46","https://goo.gl/maps/VSsKqWSNxEMRqC6PA"];
let pri1 =document.getElementById('prix');
let pri2 =document.getElementById('time');
let pri3 =document.getElementById('ocalisation');
b1.onclick= function(){ 
  footer.style.top="130vh";
  copyright.style.top="130vh";
maindiv.classList.add('info');
pri1.innerHTML=prix[0];
pri2.innerHTML=time[0];
pri3.href=ocali[0];
   video.src="vid1.mp4";
   video.style.display='block';
   image.src=src1;
   pe.innerHTML=para1;
   h2.innerHTML=tilte1;
img_1.src=span1[0];
img_2.src=span1[1];
img_3.src=span1[2];
nav.style.display='block';
section.style.display='block';
maindiv.style.display="flex";
   h1.style.display='none';
}
b2.onclick= function(){
  footer.style.top="130vh";
  copyright.style.top="130vh";
  maindiv.style.display="flex";
   h1.style.display='none';
  pri1.innerHTML=prix[1];
pri2.innerHTML=time[1];
pri3.href=ocali[1];
   video.src="vid2.mp4";
   video.style.display='block';
   image.src=src2;
   pe.innerHTML=para2;
   h2.innerHTML=tilte2;
    img_1.src=span2[0];
    img_2.src=span2[1];
    img_3.src=span2[2];
    nav.style.display='block';
    section.style.display='block';
  
   }
 b3.onclick= function(){
  footer.style.top="130vh";
  copyright.style.top="130vh";
  maindiv.style.display="flex";
   h1.style.display='none';
  pri1.innerHTML=prix[2];
pri2.innerHTML=time[2];
pri3.href=ocali[2];
   video.src="vid3.mp4";
   video.style.display='block';
   image.src=src3;
   pe.innerHTML=para3;
   h2.innerHTML=tilte3;
img_1.src=span3[0];
img_2.src=span3[1];
img_3.src=span3[2];
nav.style.display='block'; 

section.style.display='block';
   }
 b4.onclick= function(){
  footer.style.top="130vh";
  copyright.style.top="130vh";
  maindiv.style.display="flex";
   h1.style.display='none';
  pri1.innerHTML=prix[3];
pri2.innerHTML=time[3];
pri3.href=ocali[3];
   video.src="vid4.mp4";
   video.style.display='block';
   image.src=src4;
   pe.innerHTML=para4;
   h2.innerHTML=tilte4;
    img_1.src=span4[0];
    img_2.src=span4[1];
    img_3.src=span4[2];
    nav.style.display='block';
    section.style.display='block';
   }
 b5.onclick= function(){
  footer.style.top="130vh";
  copyright.style.top="130vh";
  maindiv.style.display="flex";
   h1.style.display='none';
  pri1.innerHTML=prix[4];
pri2.innerHTML=time[4];
pri3.href=ocali[4];
   video.src="vid5.mp4";
   video.style.display='block';
   image.src=src5;
   pe.innerHTML=para5;
   h2.innerHTML=tilte5;
    img_1.src=span5[0];
    img_2.src=span5[1];
    img_3.src=span5[2];
    nav.style.display='block';
    section.style.display='block';
   }
 b6.onclick= function(){
  footer.style.top="130vh";
  copyright.style.top="130vh";
  maindiv.style.display="flex";
   h1.style.display='none';
  pri1.innerHTML=prix[5];
pri2.innerHTML=time[5];
pri3.href=ocali[5];
   video.src="vid6.mp4";
   video.style.display='block';
   image.src=src6;
   pe.innerHTML=para6;
   h2.innerHTML=tilte6; 
    img_1.src=span6[0];
    img_2.src=span6[1];
    img_3.src=span6[2];
    nav.style.display='block';
    section.style.display='block';
   }
 b7.onclick= function(){
  footer.style.top="130vh";
  copyright.style.top="130vh";
  maindiv.style.display="flex";
   h1.style.display='none';
  pri1.innerHTML=prix[6];
pri2.innerHTML=time[6];
pri3.href=ocali[6];
   video.src="vid7.mp4";
   video.style.display='block';
   img_1.src=span7[0];
   img_2.src=span7[1];
   img_3.src=span7[2];
   nav.style.display='block';
   image.src=src7;
   pe.innerHTML=para7;
   h2.innerHTML=tilte7;
   section.style.display='block';
 }

b8.onclick= function(){
  footer.style.top="130vh";
  copyright.style.top="130vh";
  maindiv.style.display="flex";
   h1.style.display='none';
  pri1.innerHTML=prix[7];
pri2.innerHTML=time[7];
pri3.href=ocali[7];
   video.src="vid8.mp4";
img_1.src=span8[0];
img_2.src=span8[1];
img_3.src=span8[2];
nav.style.display='block';
video.style.display='block';
image.src=src8;
pe.innerHTML=para8;
h2.innerHTML=tilte8;
section.style.display='block';
}
// nav
 var sp1sr1 ="1-1.jpeg";
 var sp1sr2 ="1-2.jpeg";
 var sp1sr3 ="1-3.jpeg";
 var span1=[
   sp1sr1,
   sp1sr2,
   sp1sr3
]
var sp2sr1 ="2.jpg";
var sp2sr2 ="2-1.jpg";
var sp2sr3 ="2-2.jpg";

 var span2=[
   sp2sr1,
   sp2sr2,
   sp2sr3
]
var sp3sr1 ="3-1.jpg";
var sp3sr2 ="3-2.jpg";
var sp3sr3 ="3-3.jpg";
 var span3=[
   sp3sr1,
   sp3sr2,
   sp3sr3
]
var sp4sr1 ="4-1.jpg";
var sp4sr2 ="4-2.jpg";
var sp4sr3 ="4-3.jpg";
 var span4=[
   sp4sr1,
   sp4sr2,
   sp4sr3
]
var sp5sr1 ="5-1.jpg";
var sp5sr2 ="5-2.jpg";
var sp5sr3 ="5-3.jpg";
 var span5=[
   sp5sr1,
   sp5sr2,
   sp5sr3
]
var sp6sr1 ="6-1.jpg";
var sp6sr2 ="6-2.jpg";
var sp6sr3 ="6-3.jpg";
 var span6=[
   sp6sr1,
   sp6sr2,
   sp6sr3
]
var sp7sr1 ="7-1.jpg";
var sp7sr2 ="7-2.jpg";
var sp7sr3 ="7-3.jpg";
 var span7=[
   sp7sr1,
   sp7sr2,
   sp7sr3
]
var sp8sr1 ="8-1.jpg";
var sp8sr2 ="8-2.jpg";
var sp8sr3 ="8-3.jpg";
 var span8=[
   sp8sr1,
   sp8sr2,
   sp8sr3
]

var img_1 = document.createElement('img');
var img_2 = document.createElement('img');
var img_3 = document.createElement('img');
img_1.classList.add('image1');
img_2.classList.add('image1');
img_3.classList.add('image1');
const nav =document.querySelector('nav');
nav.appendChild(img_1);
nav.appendChild(img_2);
nav.appendChild(img_3);
var video =document.querySelector('video');

img_1.onclick=function(){
  var k =image.src;
image.src=img_1.src;
img_1.src= k;
};
img_2.onclick=function(){
  var k =image.src;
  image.src=img_2.src;
img_2.src= k;
  };
  
  img_3.onclick=function(){
    var k =image.src;
    image.src=img_3.src;
    img_3.src=k;
    };
    var divprix = document.getElementById('divprix')
    var divtemp = document.getElementById('divtemps')
    var ocalisa = document.getElementById('ocalisa')
    pe.classList.add('light');
    h2.classList.add('light');
    video.classList.add('light');
    divprix.classList.add('light');
    divtemp.classList.add('light');
     ocalisa.classList.add('light');
    var j = 0 ; 
    button1.onclick=function(){
j++;
if(j % 2 != 0){
  pe.classList.remove('light');
  h2.classList.remove('light');
  video.classList.remove('light');
  divprix.classList.remove('light')
  divprix.classList.add('dark')
  divtemp.classList.remove('light')
  divtemp.classList.add('dark')
  ocalisa.classList.remove('light')
  ocalisa.classList.add('dark')
  video.classList.add('dark');
  pe.classList.add('dark');
h2.classList.add('dark');
aside.classList.add('dark')
aside.style.color="white";
aside.style.background="none";
button1.style.backgroundColor='white';
button1.style.color='black';
  button1.innerHTML=`<i class="fa-regular fa-sun"></i>`;
img_1.classList.add('dark');
  img_2.classList.add('dark');
  img_3.classList.add('dark');
  activités.style.color='black';
  information.style.color='black';
information.style.backgroundColor ='white';
  activités.style.backgroundColor ='white';
  body.style.backgroundImage='url(https://c1.wallpaperflare.com/preview/570/138/559/morocco-oriental-marrakech-orient.jpg)';
}
else{
  divprix.classList.remove('dark')
  divprix.classList.add('light')
  ocalisa.classList.remove('dark')
  ocalisa.classList.add('light')
  divtemp.classList.remove('dark')
  divtemp.classList.add('light')
  pe.classList.remove('dark');
  video.classList.remove('dark');
  video.classList.add('light');
  pe.classList.add('light');
  h2.classList.remove('dark');
  h2.classList.add('light');
  aside.classList.remove('dark');
  img_1.classList.remove('dark');
  img_2.classList.remove('dark');
  img_3.classList.remove('dark');
  d1.classList.remove('dark');
  button1.style.backgroundColor='black';
  activités.style.backgroundColor ='black';
  information.style.backgroundColor ='black';
  information.style.color='white';
  button1.style.color='white';
  activités.style.color='white';
  button1.innerHTML=`<i class="fa-regular fa-moon"></i>`;
  body.style.backgroundImage='url(https://www.lesjardinsdelamedina.com/blog/wp-content/uploads/2020/07/jama-el-fnaa.jpg)'
  
  
}

    };
    var activités = document.getElementById('active')
   activités.onclick=function(){
    j++;
    if(j % 2 != 0){
      aside.style.display='flex';
    }
    else{
      aside.style.display='none';
    }
   };
   var maindiv = document.getElementById("maindiv");
   var information =document.getElementById("info");
   var main=document.querySelector('main');
   var h1=document.querySelector("h1");
   var i =0;
   information.onclick =function(){
    i++;
    if(i % 2 != 0){
    main.style.display="flex";
    maindiv.style.display="none";
    }
    else{
    main.style.display="none";
    h1.style.display="block"
    }
   };
  




