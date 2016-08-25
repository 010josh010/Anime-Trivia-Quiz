/*Anime Quiz on Characters , Specific Questions 
*/ 

//game variables 
var question;
var questionNumber = 0; 
var answers = [];
var correct = 0; 
var incorrect= 0;

//constructors
var Character = function(name, img){
    this.name = name ; 
    this.img = img;
   
}

//images 
var img_Ahagon = 'https://66.media.tumblr.com/f57be4410a094d6b30fce44f3d1c637d/tumblr_obyndiFC821qa94xto1_500.gif'; 

var img_Yagami = 'http://66.media.tumblr.com/a3cd4397f218bfe448ee233ebb0cc03a/tumblr_oal9kj6u1J1u86t2qo1_1280.gif'; 


var img_Adashino = 'http://45.media.tumblr.com/9b9a34018262e618b69f8e34655a17f5/tumblr_o5d5i3m9xI1v7jzwdo1_500.gif'; 

var img_Seigen = 'http://pa1.narvii.com/6152/6ad05a3fc36ef5b471b784e8aa06132615cd9448_hq.gif'; 

var img_Saitama = 'https://65.media.tumblr.com/ee016fcdb3846dd464617c7480a46268/tumblr_inline_nzuds5r00P1rpv0j7_540.gif'; 

var img_Rory = 'https://45.media.tumblr.com/e66d3412e54e88994d492d00b5468825/tumblr_o50q7qMxbj1rv1jano1_540.gif'; 

var img_enmaAi = 'https://67.media.tumblr.com/48ac774b9fc504bdf7ee5ccd103a5eda/tumblr_mzya6lDrHX1topdafo1_500.gif'; 


//characters
var AhagonUmiko = new Character('Ahagon Umiko', img_Ahagon);
var YagamiKou = new Character('Yagami Kou', img_Yagami); 
var AdashinoBenio = new Character('Adashino Benio', img_Adashino); 
var SeigenAmawaka = new Character('Seigen Amawaka', img_Seigen); 
var Saitama = new Character('Saitama', img_Saitama); 
var RoryMercury = new Character('Rory Mercury', img_Rory); 
var AiEnma = new Character('Ai Enma', img_enmaAi); 






//character pool of wrong answers 
var charPool = ['Aino Minako','Akagi Takenori','Amano Gurikazu','Aoyama Motoko','Arashiyama Sera','Asada Tetsuya','Asaka Reiko','Asuka Daiki','Ayanami Rei','Ayanokouji Takashi','Ayukawa Madoka','Azuya Nagisa','Fujioka Batanen','Chiba Mamoru','Daidoji Tomoyo','Echizen Ryoma','Edogawa Conan','Fuguta Sazae','Fuji Shusuke','Fujimiya Kaede','Fujimiya Momiji','Fujisaki Akari','Fujiwara Sai','Fujiyama Okometsubu','Gohda Takeshi','Haibara	Ai','Hakuhoin Ayano','Hanabishi Kaoru','Hanagata Mitsurugi','Hananakajima Masaru','Haneoka Meimi','Haruno Sakura','Hatake Kakashi','Hayama Akito','Hayase Misa','Hazuki Seira','Yui Heero','Hibiki Go','Hibiki Ken-ichi','Hibiki Ryoga','Hibiya Chitose','Hidaka Azumi','Higuchi Kotaro','Higurashi Kagome','Himemiya Ancy','Himura Kenshin','Hino Rei','Hojo Yukino','Honekawa Suneo','Hongou Yui','Horaki Hikari','Hoshikawa Yayoi','Hoshiwatari Goro','Hououji Fu','Ibuki Maya','Ibuya Manjiro','Ichijou Hikaru','Ijuin Akira','Ikari Shinji','Ikenami Eiichi','Ikusawa Ruriko','Imonoyama Nokoru','Hitomebore Inaho','Inoue Ritsuko','Inui Sadaharu','Isikawa Goemon','Isono Katsuo','Izumo Ginga','Jigen Daisuke','Kaga Tetsuo','Kagariya Momiji','Kagurazaki Miyabi','Kaibara Futaba','Kaidou Kaoru','Kaiou Michiru','Kakizaki Hayao','Kakugeiin Kafuko','Kamina Ayato','Kamiya Kaoru','Kamoshita Yusuke','Kamui Ai','Kamui Akira','Kanzaki Akari','Kanzaki Sumire','Kasuga Ayumu','Kasuga Yui','Katsuragi Misato','Kawamura Takashi','Kikumaru Eiji','Kimidori Akane','Kindaichi Hajime','Kino Makoto','Kinomoto Sakura','Kinomoto Touya','Kiryu Toshiro','Kisaragi Honey','Kisaragi Kuon','Kitagawa Rio','Kobayakawa Miyuki','Kobayashi Akane','Kodai Susumu','Kojima Yoshiyuki','Kokubunji Minoru','Komiyama Airi','Konno Mitsune','Konoe Kaoru','Kouzuki Miyu','Kudo Shin-ichi','Kudo Yuichi','Kumashiro Sakuya','Kunikida Daitetsu','Kuonji Ukyou','Kuraaku Kenta','Kurama Yuki','Kurata Sana','Kurosaki Hisoka','Kurosawa Minamo','Kusakabe Maron','Kusanagi Hokuto','Kusanagi Mamoru','Kusanagi Motoko','Lynn Min-mei','Maehara Shinobu','Makimura Kaori','Makino Tsukushi','Makunouchi Ippo','Tachibana Maria','Masaki Kiriko','Masaki Tenchi','Matsudaira Azusa','Matsuzawa Hitomi','Meiou Setsuna','Mendo Shutaro','Mido Madoka','Mido Tomoe','Mihama Chiyo','Mikage Aya','Mimori Seira','Minami Kaede','Minamoto Shizuka','Minazuki Chika','Minazuki Taeko','Mine Fujiko','Mishima Reika','Mitani Yuki','Mitarai Hiroshi','Mitarai Kaoru','Mitsui Hisashi','Mitsukuni Aoi','Mitsukuni Mito','Miyagi Ryota','Miyazawa Miyuki','Miyuki Mayu','Mizuhara Koyomi','Mizuno Ami','Momoshiro Takeshi','Mori Yuki','Moroboshi Ataru','Motosuwa Hideki','Muraki Kazutaka','Muto Yuugi','Nagai Yoshihiko','Nagare Shizuka','Nakamura Gen','Narusegawa Naru','Natsume Akiko','Natsume Atsuko','Natsume Kyusaku','Natsume Ryunosuke','Nekki Basara','Nenga Mutsuki','Nobi Nobita','Norimaki Arare','Norimaki Senbei','Ohgami Ichiro','Oishi Shuichiro','Oizumi Yakumo','Ohkawa Utako','Ohkouchi Sakuya','Omura Yumi','Osaka Naru','Otohime Mutsumi','Otonashi Kyoko','Rukawa Kaede','Ryuzaki Sakuno','Ryuzaki Sumire','Ryuzaki Umi','Ryuzouji Junpei','Tokisada Sachiko','Saeba Ryo','Saionji Kanata','Sakuma Kazuto','Sakuraba Aoi','Sakuragi Hanamichi','Sanada Mio','Saotome Ranma','Sasaoka Natsuki','Sawaguchi Koume','Sawanoguchi Sae','Seiya Kou','Seki Joji','Sendou Akira','Shibata Rie','Shido Hikaru','Shima Daisuke','Shimazaki Rintaro','Shimbo Hiromu','Shimizu Taeko','Shindo Hikaru','Shinguji Sakura','Shinozaki ','Shirakaba Chie','Shito Haru','Soramame Ta','Sorano Hika','Soryu Asu','Suetake Kenta','Suzuhara Natsu','Suzuki Mika','Taiki Kou','Takamura Su','Takeuchi Ryo','Takino Tomo','Tanizaki Yukari','Tatsumi Seiichir','Tekuno Reiji','Tendo Aka','Tendo Kasu','Tendo Nabi','Tenjou Ute','Tenjouin Katsu','Tenkawa Akito','Ten-ou Haru','Tezuka Kunimitsu','Tezuka Ryoan','Tominaga Minako','Tomoe Hotaru','Toudou Yukifumi','Toya Akira','Tsujimoto Natsumi','Tsukino Shingo','Tsukino Usagi','Tsukishiro Yukito','Tsutsui Kimihiro','Tsuzuki Asato','Uchiha Sasuke','Ueda Hiroyasu','Uematsu Koboshi','Ukiya Shun','Umino Gurio','Urameshi Yusuke','Urashima Keitaro','Uryu Kana','Usada Hikaru','Uzumaki Naruto','Watanabe Takumi','Watari Yutaka','Yamabuki Midori','Yamada Seina','Yamagishi Mayumi','Yamamoto Yohko','Yamano Miyu','Yamazaki Shinnosuke','Yanagida Ichino','Yaten Kou','Yuuki Miaka','Yuuki Setsu','Yagami Light','Takada Kiyomi','Amane Misa','Shibuimaru Takuo','Misora Naomi','Mikami Teru','Hinamori Amu','Hinata Fuyuki','Sawada Tsuna']

function playSound(sound){
	sound.play(); 
}

function togglePlay(song, loopControl) {
  song.loop = loopControl; 
  return song.paused ? song.play() : song.pause();
}

function isPlaying(music){
     
    if(music.paused === false){
        togglePlay(music, false);
    }
}

function getAnswers(){
    for(var i = 0 ; i < 3; i++ ){
        var rand = Math.floor(Math.random() * charPool.length)+0; 
        var wrongAnswer = charPool[rand];
        answers.push(wrongAnswer); 
        
    }
    
    if(question != null){
        answers.push(question.name);
    } 
}


function loadAnswer(){
    Game.cleanup(); 
    setQuestion();
    getAnswers(); 
    shuffle();
    displayAnswers();
    setClickHandler(); 
}


function shuffle(){
   for(var i = 0 ; i < 10 ; i++){
        var x , y ; 
        function getRandom(){
        x = Math.floor(Math.random() * answers.length) + 0;
        y = Math.floor(Math.random() * answers.length) + 0;
        }
    
        if(x === y){
            getRandom(); 
        }
        else{
            var swap = answers[x]; 
            answers[x] = answers[y];
            answers[y] = swap;
        }
    
   }
}

function setQuestion(){ 
    
    question = Game.characters[questionNumber];
        if(question != null){
             var i = $('<img>'); 
    
            i.attr('src', question.img);
    
            $('.questions').html(i); 
    
            questionNumber++; 
        }
        else{
            showResults();
            $('button').on('click', Game.reset);  
        }
}


function displayAnswers(printAnswer){
  var letters = ['(a):', '(b):', '(c):', '(d):']; 
    
  for(var i = 0 ; i < answers.length; i++){
      var answer = $('<p> '+answers[i]+'</p>');
      
      answer.addClass('answer');
      answer.attr('data-name', answers[i]); 
      answer.prepend(letters[i]); 
      
      $('.answers').append(answer); 
      
  }
}

function disableClick(){
    $('.answer').off('click'); 
}

function clearAnswers(){
    $('.answers').empty(); 
}


function setClickHandler(){
    $('.answer').on('click',function(){
        var self = $(this); 
        isCorrect(self);
        console.log('click'); 
    })
       
}

function timesUp(){
     for(var i = 0 ; i < 5 ; i++){
         $('#timer').html('<p>Times Up!</p>'); 
     }
    
    
}

function timeClose(){
    $('#timer').css('color', 'crimson');

}

function showResults(){
        $('.game-elements').css('display', 'none');
        $('.results').css('display', 'block'); 
        var newDiv = $('<div>'); 
        var tag = $('<h1> Thank you for playing! </h1>');
        var correctTag = $('<h3>Correct Answers: '+ correct + '</h3>'); 
        var incorrectTag = $('<h3>Incorrect Answers: ' + incorrect + '</h3>'); 
        var playAgain = document.createElement('BUTTON'); 
        playAgain.innerHTML = 'Play Again?'; 
        playAgain.onclick = function(){
            Game.reset(); 
        }
        
            
        newDiv.append(tag);
        newDiv.append(correctTag); 
        newDiv.append(incorrectTag);
        newDiv.append(playAgain); 
        
        $('.results').append(newDiv); 

}


function isCorrect(self){

  disableClick(); 
 
  var answer = self.attr('data-name'); 
  
  if(answer === question.name){
      self.addClass('alert alert-success');
      correct++; 
      console.log(correct); 
  }
  else{
      self.addClass('alert alert-danger');
     var answers = $('.answers').children(); 
      
     for(var i = 0 ; i < answers.length; i++){
        var answer = answers[i]; 
         var name = answer.getAttribute('data-name'); 
         
         if(name === question.name){
              answer.className = 'answer alert alert-success'; 
             
             
         }
     }
     incorrect++;
     console.log(incorrect); 
     
  }
            
  setTimeout(loadAnswer, 2500); 
       
}





//timer 
var Timer = {
    set:function(min, secTens, secOnes){ 
        
            function downTick(){
            
            $('#timer').html('<p>'+min+':'+secTens+secOnes+'</p>');
            
            if(min ===0 && secTens ===0 && secOnes ===0){
                clearInterval(interval); 
                console.log('cleared'); 
                timesUp(); 
                setTimeout(showResults, 3000); 
            }
             else if(min === 0 && secTens ===3 && secOnes ===0){
                timeClose(); 
                secOnes =10;
                secTens--;
                secOnes--;
            }
            else if(secOnes ===0 && secTens ===0){
                min--;
                secOnes = 10
                secTens = 5; 
                secOnes--; 
            }  
            else{
                 if(secOnes ===0){
                    secOnes =10;
                    secTens--;
                    secOnes--; 
                }
                else{
                    secOnes--;
                }
            }  
        }
        var interval = setInterval(downTick, 1000); 
        
    },
    
    destroy:function(){
        $('#timer').empty(); 
    }
    

}

var Game = {
    start:function(){
        Timer.set(2,0,0);
         loadAnswer(); 
        
    },
    
    characters: [AhagonUmiko, AdashinoBenio, RoryMercury, SeigenAmawaka, YagamiKou, Saitama, AiEnma, null], 
    
    cleanup:function(){
        $('.questions').empty(); 
        answers = []; 
        clearAnswers(); 
    },
    
    reset:function(){
        $('.results').empty(); 
        $('.results').css('display', 'none'); 
        $('.game-elements').css('display', 'block'); 
        $('#timer').css('color', 'black'); 
        Game.cleanup(); 
        Timer.destroy();
        Game.start(); 
        console.log('game reset'); 
    }
    
}


//calls 
Game.start(); 



